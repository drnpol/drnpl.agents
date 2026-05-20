export interface ScopesConfig {
  global?: string[];
  [scopeName: string]: string[] | undefined;
}

export interface AgentMDConfig {
  project: {
    name: string;
    type?: string;
    framework?: string;
    architecture?: string;
  };
  extends: string[];
  scopes?: ScopesConfig;
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
