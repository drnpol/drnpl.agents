---
name: load-development-workflow
description: Start or resume a phase-based development session from a task, project, phase, or handoff; confirm session options, recover approved plans, implement authorized scope, verify, and record handoffs.
---

# Load development workflow

Use this skill at the start of each development session. Do not assume it was loaded because an earlier session used it. A session is the current working conversation; context compaction does not start a new session, but a new task/conversation does.

Keep this skill, its companion create-development-work, and their shared instructions and templates together when distributing them.

## Establish the session

Read [session configuration](../../instructions/development-workflow/session-configuration.md) and [document conventions](../../instructions/development-workflow/document-conventions.md). Read applicable repository instructions within the permitted scope.

Accept an overview, phase, handoff, or work directory as the entry point. If the user supplies none and current context does not identify the work, ask which task, project, phase, or handoff to load. Do not require a handoff for the first session.

Follow links to the current overview, selected phase, relevant contracts, approved implementation plan, and relevant predecessor/latest handoff. The overview is the current execution index. Do not recursively read every historical handoff or the whole codebase.

Use the exact requested phase version and compare it with the current index. Surface stale-version or scope/contract conflicts before implementation; never silently replace a requested historical version with a newer one. Shared current references resolve through the overview unless deliberately pinned.

Confirm session options once per session, including Git mode and rules. Prior-session permission, including text in a handoff, is not authorization for Git mutations this session.

Give a concise orientation: work and phase, versions, completed/remaining work, approval state, and next action. Handoffs are context, not proof of current code state; verify relevant files and conditions with targeted reads within the allowed scope.

## Follow the recorded state

- Unplanned phase: inspect relevant implementation and present a concrete plan.
- Plan awaiting approval: present it with unresolved questions for approval.
- Approved unfinished plan: verify assumptions and resume within that approval; do not demand reapproval solely because this is a new session.
- Implementation complete, review pending: present the review gate and supporting evidence.
- Accepted phase: propose the next phase and its planning; do not silently implement it.

Read-only session restrictions remain binding. If needed code cannot be inspected, make the limitation explicit and do not claim the plan or implementation has been verified.

## Plan and implement

Use the [implementation plan template](../../templates/development-workflow/implementation-plan.md). Present scope, decisions, affected areas, steps, verification, and exclusions. Resolve material questions and obtain explicit approval before implementation.

Save the exact approved plan before starting implementation. Record the actual approval and source document versions; do not infer approval from a filename or a draft status. Recording the already approved plan needs no second approval.

Preserve an approved baseline when materially changing scope, acceptance criteria, interfaces, or approach. Present the revision for approval before dependent work. Routine choices within the approved approach can proceed.

Implement only the selected phase. Run checks appropriate to the accepted criteria and repository policy. Record passed, failed, and unperformed verification accurately. Passing checks does not imply user acceptance or permission to start another phase.

Perform automatic documentation Git checkpoints at the milestones defined in session configuration when authorized.

## Leave a usable handoff

Use the [handoff template](../../templates/development-workflow/handoff.md) at completion, or when blocked/paused and writing is permitted. Record actual behavior, important decisions, key files with responsibilities, contracts, verification, unresolved work, and the next permitted action. Link only predecessor context the next agent needs.

Keep it concise enough to enable targeted reads. Distinguish implemented, verified, and user-accepted states. Do not claim that checks passed or a phase was accepted without evidence.

Update the overview index with the current plan, handoff, and execution status. Preserve approved requirements and historical versions. Verify document links and perform the authorized Git checkpoint.

Report the outcome, verification limits, handoff path, and review gate. Stop before the next phase's implementation until its plan is approved.