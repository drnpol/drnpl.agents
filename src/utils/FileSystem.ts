import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { AgentMDConfig } from '../types/index.js';

export class FileSystem {
  readYamlConfig(filePath: string): AgentMDConfig {
    const raw = fs.readFileSync(filePath, 'utf8');
    return yaml.load(raw) as AgentMDConfig;
  }

  findConfig(startDir: string): string | null {
    let dir = startDir;
    for (let i = 0; i < 10; i++) {
      const candidate = path.join(dir, 'agentmd.yaml');
      if (fs.existsSync(candidate)) return candidate;
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
    return null;
  }

  moduleExists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }

  readModule(filePath: string): string {
    return fs.readFileSync(filePath, 'utf8');
  }

  writeOutput(filePath: string, content: string): void {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
