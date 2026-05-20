import path from 'path';
import { ScopesConfig } from '../types/index.js';
import { ConfigLoader } from './ConfigLoader.js';
import { ModuleResolver } from './ModuleResolver.js';
import { Composer } from './Composer.js';
import { Generator } from './Generator.js';
import { FileSystem } from '../utils/FileSystem.js';
import { MarkdownParser } from '../utils/MarkdownParser.js';

export interface AgentMDOptions {
  cwd: string;
  configPath?: string;
  output?: string;
}

export class AgentMD {
  private fs: FileSystem;
  private parser: MarkdownParser;
  private configLoader: ConfigLoader;
  private composer: Composer;
  private generator: Generator;

  constructor(private options: AgentMDOptions) {
    this.fs = new FileSystem();
    this.parser = new MarkdownParser();
    this.configLoader = new ConfigLoader(this.fs);
    this.composer = new Composer(this.parser, this.fs);
    this.generator = new Generator(this.parser, this.fs);
  }

  build(): void {
    const { config, configDir } = this.configLoader.load(
      this.options.cwd,
      this.options.configPath,
    );

    const customModuleDir = config.modulePath
      ? path.resolve(configDir, config.modulePath)
      : undefined;

    const resolver = new ModuleResolver(customModuleDir);

    const outputPath = this.options.output
      ? path.resolve(this.options.cwd, this.options.output)
      : config.output
        ? path.resolve(configDir, config.output)
        : path.resolve(this.options.cwd, 'AGENTS.md');

    const outputDir = path.dirname(outputPath);

    this.buildMain(resolver, config, outputPath);
    this.buildScopes(resolver, config, outputDir);
  }

  private buildMain(
    resolver: ModuleResolver,
    config: { project: { name: string }; extends: string[]; scopes?: ScopesConfig },
    outputPath: string,
  ): void {
    const resolved = resolver.resolveAll(config.extends);

    console.error(`Resolved ${resolved.length} modules:`);
    for (const r of resolved) {
      console.error(`  ${r.source} -> ${r.filePath}`);
    }

    const parsed = this.composer.loadAndParseModules(resolved);
    const sections = this.composer.compose(parsed);

    const content = this.generator.generateMain(
      config.project.name,
      sections,
      config.scopes,
    );

    this.generator.writeFile(outputPath, content);
    console.error(`\nWrote AGENTS.md to ${outputPath}`);
  }

  private buildScopes(
    resolver: ModuleResolver,
    config: { project: { name: string }; scopes?: ScopesConfig },
    outputDir: string,
  ): void {
    if (!config.scopes) return;

    const scopesDir = path.resolve(outputDir, 'scopes');
    let scopeCount = 0;

    for (const [scopeName, scopeExtends] of Object.entries(config.scopes)) {
      if (!scopeExtends || scopeExtends.length === 0) continue;

      const resolved = resolver.resolveAll(scopeExtends);
      const parsed = this.composer.loadAndParseModules(resolved);
      const sections = this.composer.compose(parsed);

      const scopeFileName =
        scopeName === 'global' ? 'global.rule.md' : `${scopeName}/rules.md`;
      const scopeOutputPath = path.resolve(scopesDir, scopeFileName);

      const content = this.generator.generateScope(
        config.project.name,
        scopeName,
        sections,
      );

      this.generator.writeFile(scopeOutputPath, content);
      scopeCount++;
    }

    if (scopeCount > 0) {
      console.error(`Wrote ${scopeCount} scope files to ${scopesDir}`);
    }
  }
}
