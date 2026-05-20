#!/usr/bin/env node
import { Command } from 'commander';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { BuildCommand } from './commands/BuildCommand.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, '../../package.json'), 'utf8'),
);

const program = new Command();

program
  .name('agentmd')
  .description(
    'Composable AGENTS.md builder — standardize agent instructions across projects',
  )
  .version(pkg.version);

const buildCmd = new BuildCommand();

program
  .command('build')
  .description('Build AGENTS.md from agentmd.yaml config')
  .option('-c, --config <path>', 'Path to agentmd.yaml config file')
  .option('-o, --output <path>', 'Output path for the generated AGENTS.md')
  .action((opts) => buildCmd.execute(opts));

program.parse(process.argv);
