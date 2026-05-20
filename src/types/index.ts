export interface AgentMDConfig {
  project: {
    name: string;
  };
  extends: string[];
  output?: string;
  modulePath?: string;
}

export interface ModuleSection {
  level: number;
  title: string;
  content: string;
}

export interface ParsedModule {
  source: string;
  filePath: string;
  sections: ModuleSection[];
}
