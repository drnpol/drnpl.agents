import { AgentMD } from '../../core/AgentMD.js';

export interface BuildOptions {
  config?: string;
  output?: string;
}

export class BuildCommand {
  execute(options: BuildOptions): void {
    const agent = new AgentMD({
      cwd: process.cwd(),
      configPath: options.config,
      output: options.output,
    });
    agent.build();
  }
}
