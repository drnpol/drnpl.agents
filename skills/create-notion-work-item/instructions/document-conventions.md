# Development document conventions

## Work classification and layout

A general work item has one bounded outcome. An epic coordinates multiple related outcomes and shared contracts. Both use phases; a task normally have one phase, but its in user discretion if they want to manage a task with multiple phases. In cases where a task can may contain multiple phases, suggest to user that the task be converted to an epic. 

Preserve existing conventions. New default:
- ["Epic"] {{work-slug}}
- [{{dev_work_item_type}}] {{work-slug}}

Represent the overview and each approved phase as Notion pages in the confirmed destination. Map task/project classification to existing work types using the current schema and user-approved structure. Recommend an Epic for multiple related outcomes, but do not force that type for every main item.

Use stable document labels when naming pages:
- Phase: PH-01-phase-slug, version v1.0.
- Approved implementation plan section inside the phase/work-item page in a later execution workflow: IP-PH-01-phase-slug, version v1.0. This is a section label, not a separate page or file.
- Accepted handoff in a later execution workflow: HO-PH-01-YYYYMMDD-01.

These labels do not require local directories or Markdown files. Create no plans or handoffs during initialization.

Use zero-padded stable phase IDs, lowercase hyphenated slugs, and the user's local date. Increment the handoff sequence for multiple handoffs on a date. Plan revisions are independent of phase revisions; record the exact phase version inside the plan.

## Responsibilities and references

The overview defines outcome, scope, shared documents, workflow configuration, and the authoritative current phase index. Each phase links back to it and states its deliverable, dependencies, acceptance, exclusions, and review gate.

The Implementation plan section in each phase/work-item page explains its approved implementation approach. Preserve superseded approved plans as versioned sections or toggles on that same page. Do not create separate plan work items, pages, local files, or databases/tables. Handoffs explain actual results and remaining work; link the relevant plan section/version instead of copying it.

Use Notion page links in generated documentation. Overview rows link the current phase and latest handoff when they exist; the approved-plan entry records its version and links to the embedded section or phase page. Phases resolve evolving shared references through the current overview, or explicitly state why a particular version is pinned. Plans pin the actual versions used. Adapt file-oriented template headings and placeholders to pages and links; omit repository paths and Git preferences unless local documentation was separately requested.

If an overview is superseded, update current backlinks and indexes within the authorized scope. Preserve historical requirements and usable page links. Do not silently execute historical phases.

## Versioning and status

- Start at v1.0.
- Increment minor for clarification/refinement preserving intended outcome.
- Increment major for material scope, acceptance, or contract changes.
- Overview and phase drafts may be edited. Implementation-plan discussion stays in the conversation: do not create or update saved plan sections or allocate versions for each feedback reply. Save a plan only once its discussion is settled and the user explicitly approves implementation.
- First approved implementation plan: v1.0. Each changed, approved replacement gets the next minor or major version under the rules above (for example, v1.0 to v1.1 for an approach refinement, or v1.1 to v2.0 for changed scope). Inspect existing versions, never reuse a version, and keep the plan section's version label consistent with its content. Resuming or reapproving an unchanged plan creates no version.
- Preserve approved baselines when superseding them, with a supersedes link and change summary. Create the approved replacement before updating the overview's current plan link.
- Version significance does not determine approval: a material approach change still requires approval even if its document version is minor.
- Execution status/link maintenance alone does not require a requirements version bump.
- Establish approved replacements and update references before marking earlier pages as superseded. Preserve the approved baseline; do not archive or delete pages as an incidental initialization step.

Handoffs are written only after the user accepts the reviewed results. Present review evidence in the conversation first; fixes return to review before recording the handoff. For incomplete blocked/paused work, require explicit approval to hand off the explained state, record that approval, and leave phase acceptance pending. Do not create or revise handoffs during review discussion. Allocate a fresh date/sequence label for each approved handoff and preserve earlier records. Handoff storage must be established by the later execution workflow.

Suggested execution states: not-started, planning, awaiting-plan-approval, implementing, blocked, awaiting-review, accepted. Plan approval and phase acceptance are separate events. Never infer either from completed code or passing checks.

## Configuration

Record persistent conventions and verification/review requirements in the overview. Keep resource identifiers and access mappings in session context as defined in session configuration; do not copy them into the overview. Recorded session access is never reusable authorization. Keep changes to global repository instructions out of ordinary phase work unless explicitly authorized.

Use only the templates relevant to the selected type; replace angle-bracket placeholders and remove unused optional sections. Missing information should be labeled unresolved with its impact.
