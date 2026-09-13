---
name: create-development-work
description: Initialize a development task or project with a confirmed overview and versioned phases. Use when creating new development work; use load-development-workflow to resume existing work.
---

# Create development work

Use this skill to initialize documentation for a bounded task or a multi-outcome project. Preserve user-supplied requirements and phases; do not impose a method for inventing phases.

This skill uses shared resources two directories above this folder. Keep both workflow skills, instructions/development-workflow, and templates/development-workflow together when distributing them.

## Before creating files

Read [session configuration](../../instructions/development-workflow/session-configuration.md) and [document conventions](../../instructions/development-workflow/document-conventions.md). Read applicable repository instructions within the user's permitted scope. Confirm session options once; reuse a confirmation already given in this same session.

Recommend task for one bounded outcome, or project for related outcomes with shared contracts and cross-phase dependencies. Either may have one or more phases. Ask only for missing information needed to define the work.

Present the proposed type, location, outcome, scope/exclusions, phase breakdown, dependencies, acceptance criteria, and applicable configuration for user confirmation. Existing user approval of that concrete structure suffices. Initialization approval does not authorize phase implementation.

## Create the approved structure

Use the appropriate overview and phase templates:
- [Task overview](../../templates/development-workflow/task-overview.md)
- [Project overview](../../templates/development-workflow/project-overview.md)
- [Task phase](../../templates/development-workflow/task-phase.md)
- [Project phase](../../templates/development-workflow/project-phase.md)

Replace template placeholders with confirmed details. Mark unresolved items explicitly instead of inventing decisions. Keep the overview's phase index and each phase's backlink consistent. Shared rules belong in the overview or linked contracts.

Preserve established repository layout and naming. For new work, use the defaults in document conventions. Do not migrate existing documents or overwrite existing work as an incidental step.

Verify relative links, unique phase IDs, dependency order, concrete acceptance criteria, and that excluded work has not entered phase scope. Perform the authorized Git checkpoint after the coherent initialization is ready.

Report the created overview and entry phase. Direct the next development session to load-development-workflow with either path. Do not begin implementation merely because initialization is complete.