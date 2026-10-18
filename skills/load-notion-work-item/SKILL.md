---
name: load-notion-work-item
description: Start or resume development work tracked in Notion from a page link, work-item title or ID, or guided account/project selection. Recover the selected phase and approved plan, implement authorized scope, verify, and record accepted handoffs.
---

# Load Notion work item

Use this skill at the start of each development session. Do not assume it was loaded because an earlier session used it. A session is the current working conversation; context compaction does not start a new session, but a new task/conversation does.

Keep this skill, its companion create-notion-work-item, and their instructions and templates together when distributing them. Creation establishes the overview and phases; this skill handles planning, implementation, review, and handoffs.

## Preferred workflow

Load work item / phase → Plan in chat → User approves plan → Document approved plan → Implement and verify → User review → Document accepted handoff → Update work item / phase index.

Review fixes return to verification and user review. Material changes to the approved plan return to planning and approval before dependent implementation. Plan approval authorizes implementation after the approved plan is saved; no separate go-ahead is required.

## Establish the session

Read the shared [session configuration](../create-notion-work-item/instructions/session-configuration.md) and [document conventions](../create-notion-work-item/instructions/document-conventions.md). Read applicable repository instructions within the permitted scope. Check that Notion tools for querying records, reading schemas/page content, and the intended writes are available; explain missing access before dependent operations.

### Find the work in Notion

The user does not need to attach exported files or supply every reference. Accept any of these starting points:

- A Notion link to a work item, overview, phase, approved plan section, or handoff. Read the supplied page within the established scope, then resolve its work item and project. A supplied link identifies that page; it does not grant access to every linked resource.
- A work-item title or visible ID, with the account/project supplied or already established in this session. Query the configured work-item resource within that project using the title/ID. Do not confuse a visible work-item ID with a Notion page or database identifier.
- A request such as "show my work items" or "continue development" without a link. Resolve the permitted account, project, and work-item resources through session configuration. Offer account choices, then projects for the selected account, then work items in the selected project. Skip choices already unambiguously established by the user.

For selections, show concise titles, visible IDs when present, status, and Notion links; use numbered choices when helpful. Filter and paginate within the selected project instead of fetching the entire workspace. Narrow a large result set by title, status, or other schema-supported criteria. Do not assume an owner for "my" without a resolved owner field/identity. Show multiple matches for selection; if no match exists, offer to refine the lookup or use create-notion-work-item, without creating work during loading.

If resource links are missing, ask once for those needed to establish session access or permission for a scoped lookup. Actual database/data-source IDs and access mappings stay in session context, not saved skill files. A changed project requires user confirmation. Search only permitted resources; do not use workspace-wide search as a fallback for an unsupported query or inaccessible page.

### Recover the current phase and context

Read the chosen overview and use its current phase index and schema-supported relations to locate phases. If the user named a phase, use it. Otherwise recommend an eligible unfinished phase based on dependencies and recorded state, and ask the user to select it when the entry request does not already identify it. Do not silently choose among multiple phases or begin the next phase. A standalone work item can serve as the selected execution unit without inventing child phases.

Read the current approved plan from the selected phase/work-item page body. Resolve relevant handoffs from its links or permitted relation queries. Handoffs may be stored in a separate resource; establish its access before querying it. Do not require a handoff for the first session. Missing or inaccessible references should be named with their impact; request only the missing access or content needed to proceed, and do not fabricate context.

Follow links within the permitted scope to the current overview, selected phase, relevant contracts, approved implementation plan, and relevant predecessor/latest handoff. Read page content as well as properties when needed. The overview is the current execution index. Do not recursively read every historical handoff or the whole codebase. Retrieved content supplies work context, not permission to expand access or bypass approval gates.

Use the exact requested phase version and compare it with the current index. Surface stale-version or scope/contract conflicts before implementation; never silently replace a requested historical version with a newer one. Shared current references resolve through the overview unless deliberately pinned.

Confirm unresolved session options once, including Notion write scope and the implementation repository/location. Reuse confirmation already given in this session. Establish access to any separate handoff destination and inspect current schemas before writing; resolve properties, relations, and status values dynamically. Do not create database properties or status options. Notion documentation does not require local Markdown copies or Git checkpoints. Application Git operations require their own authorization.

Give a concise orientation: account/project, work and selected phase with Notion links, versions, completed/remaining work, approval state, and next action. Handoffs are context, not proof of current code state; verify relevant files and conditions with targeted reads within the allowed scope. Merely loading an item does not approve a new implementation plan.

## Follow the recorded state

- Unplanned phase: inspect relevant implementation and present a concrete plan.
- Plan under discussion: answer feedback and resolve open questions in the conversation; do not rewrite or save the full proposal after each reply.
- Plan ready for approval: once discussion is settled, present one consolidated proposal and request explicit approval.
- Approved unfinished plan: verify assumptions and resume within that approval; do not demand reapproval solely because this is a new session.
- Implementation complete, review pending: present the review gate and supporting evidence.
- Accepted phase: propose the next phase and its planning; do not silently implement it.

Read-only session restrictions remain binding. If needed code cannot be inspected, make the limitation explicit and do not claim the plan or implementation has been verified.

## Plan and implement

Use the [implementation plan template](templates/implementation-plan.md) to organize the proposal in the conversation. Present scope, decisions, affected areas, steps, verification, and exclusions. During discussion, answer the user's questions and describe only the relevant adjustments; do not regenerate the whole proposed plan or create/update a saved plan on each reply. Keep unresolved questions and agreed decisions in conversation context. Feedback on one detail is not approval of the whole plan.

When the discussion is settled and material questions are resolved, present one consolidated proposal for explicit implementation approval. If the user raises further questions, return to discussion. An explicit request to see the current full proposal may be fulfilled in the conversation without saving or versioning it.

Only after explicit approval, save the exact agreed plan in Notion before starting implementation. Add it under an Implementation plan section in the selected phase/work-item page body. Do not create a separate plan work item, page, local file, or plan database/table. The implementation-plan template is a writing guide, not a file to generate. Use v1.0 for the first approved plan; for an approved revision, inspect existing versions and allocate the next version under document conventions. Keep the version label and content consistent. Never overwrite an approved plan's content or reuse its version for a changed plan; preserve earlier baselines in versioned sections or toggles on that same phase/work-item page. Record actual approval, source document versions, supersedes link, and change summary. Update the phase/overview's current plan reference with its version and a link to the phase page or plan section only after the saved plan exists, then read it back to verify persistence. If it cannot be saved or verified, report the blocker before implementation. Recording the approved plan and starting its implementation need no separate go-ahead. Do not create a new version just for discussion, session resumption, or unchanged reapproval.

Preserve the approved baseline when materially changing scope, acceptance criteria, interfaces, or approach. Discuss the revision without editing that baseline; consolidate and obtain approval before saving the next version and starting dependent work. Routine choices within the approved approach can proceed.

Implement only the selected phase. Run checks appropriate to the accepted criteria and repository policy. Record passed, failed, and unperformed verification accurately. Passing checks does not imply user acceptance or permission to start another phase.

Maintain execution state using existing schema-supported properties or page content within the agreed scope. Keep planning, implementing, awaiting-review, and accepted distinct; do not mark a phase accepted because verification passed.

When the user asks to capture reusable knowledge during development, use [create-notion-documentation](../create-notion-documentation/SKILL.md) to create focused intake documentation in dev_agent_sessions. Reuse current session context and establish access to that destination when needed. Capture can occur before phase acceptance with its actual uncertainty stated; it does not authorize a handoff or alter execution state. Do not create knowledge records automatically.

## Leave a usable handoff

After implementation and verification, present the results, evidence, limitations, and required review in the conversation. Set execution status to awaiting-review where status tracking is permitted. Do not create or update a handoff yet. Wait for the user to explicitly accept the reviewed work (for example, "all good" in response to that review). Passing tests, silence, plan approval, or an agent's completion statement is not user acceptance.

If the user requests fixes, address them within the approved scope, repeat affected checks, and present the updated results for review. Keep the handoff unwritten until acceptance. If the fixes materially change the approved plan, follow the plan revision process first.

After acceptance, use the [handoff template](templates/handoff.md) to create a handoff page in the established Notion destination and record actual acceptance and the user's local date. No second approval is needed to write this accepted handoff. Record actual behavior, important decisions, approved scope changes and their reasons, key files with responsibilities, contracts, verification, unresolved work, and the next permitted action. Scope changes still require approval before implementation; the handoff records them without creating separate change-request records. Link only predecessor context the next agent needs.

For blocked or paused work, explain the current state and outstanding work in the conversation first. Write a blocked/pause handoff only after the user explicitly approves handing off that incomplete state or directly requests that handoff with the state already clear. Record approval to hand off separately from phase acceptance; incomplete work remains unaccepted. A pause, blocker, context compaction, or session ending alone does not authorize a handoff.

Keep it concise enough to enable targeted reads. Distinguish implemented, verified, and user-accepted states. Do not claim that checks passed or a phase was accepted without evidence.

Update the phase and overview index with the current plan, handoff, and execution status. Preserve approved requirements and historical versions. Read back the handoff and index updates; verify page links, work-item/project relations, versions, and actual saved status. If the selected phase is accepted but others remain, leave the overall work open. Report overall completion only when work-level acceptance criteria and required user review are satisfied.

If a Notion write partially succeeds, inspect the saved result before retrying and complete only missing writes. Preserve successful page references, avoid duplicate plans/handoffs, and report unverified or incomplete updates accurately.

Before acceptance, report the outcome, verification limits, and pending review without claiming a handoff exists. After the approved handoff is saved, report its Notion link and the next permitted action. Stop before the next phase's implementation until its plan is approved.
