---
name: collaborate-dotnet-backend
description: Coordinate focused .NET backend implementation, code review, and optional API and integration testing with separate agent responsibilities.
---

# Collaborate .NET Backend

## Purpose

Deliver C#/.NET backend changes with explicit ownership and verification proportional to the task. Exclude UI development and non-.NET backend implementation.

## Team Selection

| Role | Responsibility | When to use |
| --- | --- | --- |
| Main agent | Scope, contracts, assignments, integration, final verification | Always |
| dotnet-backend-developer | C#/.NET backend implementation and focused regression tests | Substantive implementation |
| dotnet-code-reviewer | Independent review; findings only | After substantive implementation |
| dotnet-backend-qa | ASP.NET Core API, persistence, and integration acceptance checks | When cross-component behavior or risk warrants it |

- Handle small, localized changes directly when delegation adds little value.
- Spawn the selected roles as subagents using the available collaboration tools. This skill authorizes delegation for the requested backend task.
- Use one developer by default. Add another only for independent work with separate file ownership.
- Keep general QA and UI testing outside this workflow unless the user requests those scopes.
- If a role is unavailable, use a worker with the corresponding repository agent instructions, or perform that responsibility in the main agent. State the fallback.

## Coordinator Responsibilities

- Establish the requested behavior and acceptance criteria from the user and repository.
- Follow the installed codebase-memory skill for structural exploration.
- Set shared API contracts and assign ownership before parallel implementation.
- Resolve scope and design disagreements using requirements and evidence.
- Keep coordination in this chat; additional planning files are optional unless required by the repository or user.

## Assignment Brief

Give each agent:
- Objective and acceptance criteria.
- Owned files or modules and allowed edits.
- Relevant contracts, repository guidance, and dependencies.
- Required checks and expected handoff.
- Notice that other agents share the workspace: preserve their edits and report ownership conflicts.

## Editing Boundaries

- One writer per file at a time, including tests.
- Assign shared DTOs, dependency registration, project files, migrations, and EF model snapshots to one owner.
- Agree on contracts before dependent test or implementation work starts.
- Only the main agent assigns or transfers ownership. Subagents report extra work rather than spawning more agents.
- Reviewers report findings without modifying files. Implementation fixes return to the developer.

## Workflow

1. Scope the change and select the smallest useful team.
2. Assign implementation and focused regression tests to dotnet-backend-developer.
3. When useful, let dotnet-backend-qa derive acceptance scenarios while implementation proceeds; concurrent test edits require stable contracts and separate ownership.
4. Review the stable implementation with dotnet-code-reviewer. Run dotnet-backend-qa checks when selected; avoid concurrent commands that mutate the same build outputs, test database, or fixtures.
5. Send actionable findings to the owning agent. Recheck affected behavior after fixes; broaden checks only when new evidence warrants it.
6. Inspect the combined changes, complete applicable repository checks, and report the outcome.

## Handoff

Each agent returns:
- Changes or findings, with file references.
- Checks actually run and their results.
- Blockers, unverified behavior, and decisions needed from the coordinator.

## Completion

- Requested behavior is implemented and applicable checks pass.
- Material findings are resolved or explicitly reported as unresolved.
- Blocked checks are reported as blocked, never as passing.
- Stop repetitive review loops when no new evidence appears; identify the unresolved issue and next required action.

## Tool Use

- Use available repository tools and established test commands.
- Use vs-roslyn only when available and useful for the active Visual Studio solution; it is not required for this workflow.
- Agent files define responsibilities; they do not create tools or override session permissions.
