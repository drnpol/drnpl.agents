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
- Plan under discussion: answer feedback and resolve open questions in the conversation; do not rewrite or save the full proposal after each reply.
- Plan ready for approval: once discussion is settled, present one consolidated proposal and request explicit approval.
- Approved unfinished plan: verify assumptions and resume within that approval; do not demand reapproval solely because this is a new session.
- Implementation complete, review pending: present the review gate and supporting evidence.
- Accepted phase: propose the next phase and its planning; do not silently implement it.

Read-only session restrictions remain binding. If needed code cannot be inspected, make the limitation explicit and do not claim the plan or implementation has been verified.

## Plan and implement

Use the [implementation plan template](../../templates/development-workflow/implementation-plan.md) to organize the proposal in the conversation. Present scope, decisions, affected areas, steps, verification, and exclusions. During discussion, answer the user's questions and describe only the relevant adjustments; do not regenerate the whole proposed plan or create/update a plan file on each reply. Keep unresolved questions and agreed decisions in conversation context. Feedback on one detail is not approval of the whole plan.

When the discussion is settled and material questions are resolved, present one consolidated proposal for explicit implementation approval. If the user raises further questions, return to discussion. An explicit request to see the current full proposal may be fulfilled in the conversation without saving or versioning it.

Only after explicit approval, save the exact agreed plan before starting implementation. Use v1.0 for the first approved plan; for an approved revision, inspect the existing plan versions and allocate the next version under document conventions. Keep the filename and internal version identical. Never overwrite an approved plan's content or reuse its version for a changed plan. Record the actual approval, source document versions, supersedes link, and change summary. Update the overview's current plan link after the new file exists. Recording the already approved plan needs no second approval. Do not create a new version just for discussion, session resumption, or unchanged reapproval.

Preserve the approved baseline when materially changing scope, acceptance criteria, interfaces, or approach. Discuss the revision without editing that baseline; consolidate and obtain approval before saving the next version and starting dependent work. Routine choices within the approved approach can proceed.

Implement only the selected phase. Run checks appropriate to the accepted criteria and repository policy. Record passed, failed, and unperformed verification accurately. Passing checks does not imply user acceptance or permission to start another phase.

Perform automatic documentation Git checkpoints at the milestones defined in session configuration when authorized.

## Leave a usable handoff

After implementation and verification, present the results, evidence, limitations, and required review in the conversation. Set execution status to awaiting-review where status tracking is permitted. Do not create or update a handoff file yet. Wait for the user to explicitly accept the reviewed work (for example, "all good" in response to that review). Passing tests, silence, plan approval, or an agent's completion statement is not user acceptance.

If the user requests fixes, address them within the approved scope, repeat affected checks, and present the updated results for review. Keep the handoff unwritten until acceptance. If the fixes materially change the approved plan, follow the plan revision process first.

After acceptance, use the [handoff template](../../templates/development-workflow/handoff.md) and record the actual acceptance and date. No second approval is needed to write this accepted handoff. Record actual behavior, important decisions, key files with responsibilities, contracts, verification, unresolved work, and the next permitted action. Link only predecessor context the next agent needs.

For blocked or paused work, explain the current state and outstanding work in the conversation first. Write a blocked/pause handoff only after the user explicitly approves handing off that incomplete state or directly requests that handoff with the state already clear. Record approval to hand off separately from phase acceptance; incomplete work remains unaccepted. A pause, blocker, context compaction, or session ending alone does not authorize a handoff.

Keep it concise enough to enable targeted reads. Distinguish implemented, verified, and user-accepted states. Do not claim that checks passed or a phase was accepted without evidence.

Update the overview index with the current plan, handoff, and execution status. Preserve approved requirements and historical versions. Verify document links and perform the authorized Git checkpoint.

Before acceptance, report the outcome, verification limits, and pending review without a handoff path. After the approved handoff is saved, report its path and the next permitted action. Stop before the next phase's implementation until its plan is approved.
