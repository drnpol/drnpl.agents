import { ParsedModule, ModuleSection } from '../types/index.js';
import { MarkdownParser } from '../utils/MarkdownParser.js';
import { FileSystem } from '../utils/FileSystem.js';

export class Composer {
  constructor(
    private parser: MarkdownParser,
    private fs: FileSystem,
  ) {}

  loadAndParseModules(
    modules: Array<{ source: string; filePath: string }>,
  ): ParsedModule[] {
    return modules.map((mod) => {
      const raw = this.fs.readModule(mod.filePath);
      const sections = this.parser.parse(raw);
      return { source: mod.source, filePath: mod.filePath, sections };
    });
  }

  compose(parsedModules: ParsedModule[]): ModuleSection[] {
    const merged = new Map<string, ModuleSection>();

    for (const mod of parsedModules) {
      for (const section of mod.sections) {
        if (section.level === 1) continue;
        const key = `${section.level}:${section.title}`;
        merged.set(key, section);
      }
    }

    return Array.from(merged.values());
  }
}
