import { ModuleSection } from '../types/index.js';
import { MarkdownParser } from '../utils/MarkdownParser.js';
import { FileSystem } from '../utils/FileSystem.js';

export class Generator {
  constructor(
    private parser: MarkdownParser,
    private fs: FileSystem,
  ) {}

  generate(
    projectName: string,
    sections: ModuleSection[],
    outputPath: string,
  ): void {
    const content = this.parser.generate(projectName, sections);
    this.fs.writeOutput(outputPath, content);
  }
}
