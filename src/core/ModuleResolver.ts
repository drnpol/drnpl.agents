import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

export class ModuleResolver {
  static readonly MODULES_DIR = 'modules';
  private static _packageRoot: string | null = null;

  constructor(private customModuleDir?: string) {}

  static getPackageRoot(): string {
    if (ModuleResolver._packageRoot) return ModuleResolver._packageRoot;
    ModuleResolver._packageRoot = resolve(
      dirname(fileURLToPath(import.meta.url)),
      '../..',
    );
    return ModuleResolver._packageRoot;
  }

  resolveAll(
    imports: string[],
  ): Array<{ source: string; filePath: string }> {
    return imports.map((imp) => {
      const resolved = this.resolve(imp);
      if (!resolved) {
        throw new Error(`Module not found: ${imp}`);
      }
      return { source: imp, filePath: resolved };
    });
  }

  private resolve(importPath: string): string | null {
    const relativePath = `${importPath}.md`.replace(/\\/g, '/');

    if (this.customModuleDir) {
      const customFile = path.resolve(this.customModuleDir, relativePath);
      if (fs.existsSync(customFile)) {
        return customFile;
      }
    }

    const builtInFile = path.resolve(
      ModuleResolver.getPackageRoot(),
      ModuleResolver.MODULES_DIR,
      relativePath,
    );
    if (fs.existsSync(builtInFile)) {
      return builtInFile;
    }

    return null;
  }
}
