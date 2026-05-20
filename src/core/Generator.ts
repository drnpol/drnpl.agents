import { ModuleSection, ScopesConfig } from '../types/index.js';
import { MarkdownParser } from '../utils/MarkdownParser.js';
import { FileSystem } from '../utils/FileSystem.js';

export class Generator {
  constructor(
    private parser: MarkdownParser,
    private fs: FileSystem,
  ) {}

  generateMain(
    projectName: string,
    sections: ModuleSection[],
    scopes?: ScopesConfig,
  ): string {
    const allSections = [...sections];

    if (scopes) {
      const scopeEntries = Object.entries(scopes).filter(
        ([key]) => key !== 'global',
      );
      if (scopeEntries.length > 0) {
        allSections.push({
          level: 2,
          title: 'Scopes',
          content: this.buildScopesTable(scopes),
        });
      }
    }

    return this.parser.generate(projectName, allSections);
  }

  generateScope(
    projectName: string,
    scopeName: string,
    sections: ModuleSection[],
  ): string {
    const label =
      scopeName === 'global' ? 'Global Rules' : `${scopeName} Rules`;
    return this.parser.generate(`${projectName} — ${label}`, sections);
  }

  writeFile(filePath: string, content: string): void {
    this.fs.writeOutput(filePath, content);
  }

  private buildScopesTable(scopes: ScopesConfig): string {
    const entries = Object.entries(scopes).filter(([key]) => key !== 'global');
    if (entries.length === 0) return '';

    const lines: string[] = [];
    lines.push('| Scope | Type |');
    lines.push('|-------|------|');

    for (const [name, modules] of entries) {
      if (!modules || modules.length === 0) continue;
      const type =
        modules
          .map((m) => m.replace(/^scopes\//, ''))
          .join(', ')
          .replace(/-/g, ' ') || 'custom';
      lines.push(`| ${name} | ${type} |`);
    }

    return lines.join('\n');
  }
}
