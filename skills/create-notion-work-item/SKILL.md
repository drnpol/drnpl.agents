---
name: create-notion-work-item
description: Initialize development work in Notion with a confirmed overview and versioned phases. Use when the user explicitly invokes this skill to create new development work in Notion.
---

# Create Notion work item

Use this skill to initialize documentation in Notion for a bounded task or a multi-outcome project. Preserve user-supplied requirements and phases; do not impose a method for inventing phases.

Keep this skill's instructions and templates together when distributing it. This is a tentative Notion adaptation of create-development-work; retain its planning and approval workflow.

## Preffered Workflow
**Overview Drafting**
When initializing an Epic / Main work item.
START
├── Draft Work Item
├── User Approval
│   ├── Changes Requested → Revise Draft → User Approval
│   └── Approved
├── Document Approved Work Item
└── END

**Phase Planning and Implementation**
START
├── Load Phase / Work Item
├── Implementation Planning (Chat)
├── User Approves Plan
│   ├── Changes Requested → Revise Plan → User Approval
│   └── Approved
├── Document Approved Plan
├── Implementation & Verification
├── User Review
│   ├── Changes Requested
│   │   └── Apply Fixes → Verify → User Review
│   └── Accepted
├── Document Handoff
├── Update Work Item / Phase Index
└── END

## Requirements

Check that the Notion tools needed to read schemas, query records, and create pages are available in the current session. If access is unavailable, explain what connection or access is needed before proceeding with dependent work.

Resolve permitted Notion resources through [session configuration](instructions/session-configuration.md). Keep actual database, data-source, and record identifiers in current session context; do not embed them in this skill or its supporting files.

The user must identify the project. Query the configured account resource, then show projects associated with the selected account. Reuse an unambiguous account/project selection already supplied by the user; ask only for a missing or ambiguous selection. Confirm a change of project before using it.

Verify that the configured work-item resource is accessible and inspect its current schema before proposing property mappings. Resolve related work types from existing permitted records when the schema uses a relation. Do not assume every main item must be an Epic, or hard-code property names, status values, or type record IDs from a previous workspace.

## Before creating work

Read [session configuration](instructions/session-configuration.md) and [document conventions](instructions/document-conventions.md). Read applicable repository instructions within the user's permitted scope. Confirm session options once; reuse a confirmation already given in this same session.

Check for matching existing work within the selected project before creation. If a likely duplicate exists, present its link and resolve whether to reuse it or create separate work before writing.

Recommend task for one bounded outcome, or project for related outcomes with shared contracts and cross-phase dependencies. Either may have one or more phases. Ask only for missing information needed to define the work.

Present the proposed type, Notion destination, account/project, outcome, scope/exclusions, phase breakdown, dependencies, acceptance criteria, and applicable configuration for user confirmation. Include how the overview and phases map to Notion pages, properties, and relations. Existing user approval of that concrete structure suffices. Initialization approval does not authorize phase implementation.

## Create the approved structure

Use the appropriate overview and phase templates:
- [Task overview](templates/task-overview.md)
- [Project overview](templates/project-overview.md)
- [Task phase](templates/task-phase.md)
- [Project phase](templates/project-phase.md)

Replace template placeholders with confirmed details. Mark unresolved items explicitly instead of inventing decisions. Keep the overview's phase index and each phase's backlink consistent. Shared rules belong in the overview or linked contracts.

Use the templates for content organization, adapting file paths and relative links to Notion page links. Replace work-root and Git-preference fields with the Notion destination and session access scope. Preserve established Notion layout and naming. For new work, use the defaults in document conventions. Do not migrate existing documents or overwrite existing work as an incidental step.

Create only the approved overview and phase pages, with properties and relations verified against the current schema. Keep Notion as the documentation destination; local copies and Git checkpoints require a separate user request. Do not create implementation plans or handoffs during initialization.

Apply the shared session configuration's parent-relation rules before bulk creation or linking: each phase has its intended single parent; top-level epics have none. Verify both sides of one assignment before continuing. Keep future versions within those same pages under document conventions.

If creation partially succeeds, retain the successful page references and inspect them before retrying; create only the missing parts. Report any incomplete structure.

Read back the created pages and verify page links, unique phase IDs, account/project and parent relations where applicable, dependency order, concrete acceptance criteria, and that excluded work has not entered phase scope.

Report the created overview and entry phase with Notion links. These are the entry points for the next development session. Do not begin implementation merely because initialization is complete.
