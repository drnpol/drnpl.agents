import { ModuleSection } from '../types/index.js';

export class MarkdownParser {
  parse(raw: string): ModuleSection[] {
    const sections: ModuleSection[] = [];
    const lines = raw.split('\n');
    let currentSection: ModuleSection | null = null;
    let currentContent: string[] = [];

    for (const line of lines) {
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        if (currentSection) {
          currentSection.content = currentContent.join('\n').trim();
          sections.push(currentSection);
        }
        currentSection = {
          level: headingMatch[1].length,
          title: headingMatch[2].trim(),
          content: '',
        };
        currentContent = [];
      } else {
        currentContent.push(line);
      }
    }

    if (currentSection) {
      currentSection.content = currentContent.join('\n').trim();
      sections.push(currentSection);
    }

    return sections;
  }

  generate(projectName: string, sections: ModuleSection[]): string {
    const lines: string[] = [];

    lines.push(`# AGENTS.md — ${projectName}`);
    lines.push('');

    for (const section of sections) {
      if (section.level === 1) continue;
      lines.push(`${'#'.repeat(section.level)} ${section.title}`);
      lines.push('');
      lines.push(section.content);
      lines.push('');
    }

    return lines.join('\n').trim() + '\n';
  }
}
