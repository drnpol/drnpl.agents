import path from 'path';
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
    const resolved = resolver.resolveAll(config.extends);

    console.error(`Resolved ${resolved.length} modules:`);
    for (const r of resolved) {
      console.error(`  ${r.source} -> ${r.filePath}`);
    }

    const parsed = this.composer.loadAndParseModules(resolved);
    const sections = this.composer.compose(parsed);

    const outputPath = this.options.output
      ? path.resolve(this.options.cwd, this.options.output)
      : config.output
        ? path.resolve(configDir, config.output)
        : path.resolve(this.options.cwd, 'AGENTS.md');

    this.generator.generate(config.project.name, sections, outputPath);
    console.error(`\nWrote AGENTS.md to ${outputPath}`);
  }
}
