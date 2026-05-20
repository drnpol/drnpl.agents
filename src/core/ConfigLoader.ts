import path from 'path';
import { AgentMDConfig } from '../types/index.js';
import { FileSystem } from '../utils/FileSystem.js';

export class ConfigLoader {
  constructor(private fs: FileSystem) {}

  load(cwd: string, configPath?: string): { config: AgentMDConfig; configDir: string } {
    const resolvedPath = configPath
      ? path.resolve(cwd, configPath)
      : this.fs.findConfig(cwd);

    if (!resolvedPath) {
      throw new Error('No agentmd.yaml found. Run `agentmd init` to create one.');
    }

    const config = this.fs.readYamlConfig(resolvedPath);
    const configDir = path.dirname(resolvedPath);

    return { config, configDir };
  }
}
