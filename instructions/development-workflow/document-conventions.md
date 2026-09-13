# Development document conventions

## Work classification and layout

A task has one bounded outcome. A project coordinates multiple related outcomes and shared contracts. Both use phases; a task may have one phase.

Preserve existing conventions. New default:
- .agents/tasks/YYYYMMDD-work-slug/TASK_v1.0.md
- .agents/projects/YYYYMMDD-work-slug/PROJECT_v1.0.md

When already operating at the separate documentation repository root, omit the .agents prefix. Confirm the actual destination rather than creating a nested .agents accidentally.

Within a work directory:
- phases/PH-01-phase-slug_v1.0.md
- plans/IP-PH-01-phase-slug_v1.0.md
- handoffs/HO-PH-01-YYYYMMDD-01.md
- history/ for superseded approved documents, preserving subdirectory organization when needed.

Use zero-padded stable phase IDs, lowercase hyphenated slugs, and the user's local date. Increment the handoff sequence for multiple handoffs on a date. Plan revisions are independent of phase revisions; record the exact phase version inside the plan.

## Responsibilities and references

The overview defines outcome, scope, shared documents, workflow configuration, and the authoritative current phase index. Each phase links back to it and states its deliverable, dependencies, acceptance, exclusions, and review gate.

Plans explain the approved implementation approach. Handoffs explain actual results and remaining work. Do not copy whole documents into each other.

Use relative Markdown links in generated documents. Overview rows link the current phase, plan, and latest handoff. Phases resolve evolving shared references through the current overview, or explicitly state why a particular version is pinned. Plans pin the actual versions used.

If an overview is superseded, update current backlinks and indexes. Repair relative links inside moved historical files so they still resolve, without changing their historical requirements. Do not silently execute historical phases.

## Versioning and status

- Start at v1.0.
- Increment minor for clarification/refinement preserving intended outcome.
- Increment major for material scope, acceptance, or contract changes.
- Drafts may be edited. Preserve approved baselines when superseding them, with a supersedes link and change summary.
- Version significance does not determine approval: a material approach change still requires approval even if its document version is minor.
- Execution status/link maintenance alone does not require a requirements version bump.
- Archive superseded files after establishing the replacement and updating references, subject to repository policy.

Suggested execution states: not-started, planning, awaiting-plan-approval, implementing, blocked, awaiting-review, accepted. Plan approval and phase acceptance are separate events. Never infer either from completed code or passing checks.

## Configuration

Record persistent conventions and verification/review requirements in the overview. Record session Git defaults only as preferences, never reusable authorization. Keep changes to global repository instructions out of ordinary phase work unless explicitly authorized.

Use only the templates relevant to the selected type; replace angle-bracket placeholders and remove unused optional sections. Missing information should be labeled unresolved with its impact.