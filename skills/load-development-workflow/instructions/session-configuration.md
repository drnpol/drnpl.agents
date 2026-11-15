# Session configuration and documentation Git management

## Extensible session options

At the first use of either workflow skill in a session, establish:
- Read/write scope and any user restrictions.
- Documentation repository root and work directory.
- Git mode: user-managed, agent commits, or agent commits and pushes.
- If agent-managed: permitted branch, remote/push target, commit timing and message rules.
- Applicable validation requirements and phase review gates.

Ask one concise confirmation covering the Git mode and resolved rules. The user may approve these in their initial request. Do not ask again in the same session after an explicit confirmation. Each new conversation/session requires fresh confirmation; a handoff or saved preference is not that confirmation.

Without an answer, use user-managed Git. This does not block otherwise authorized documentation or implementation work. Explicit read-only instructions still prohibit edits. Filesystem/tool approvals remain separate from workflow authorization.

Repository defaults may persist, but mark recorded session permission as historical and nontransferable. Add future options here with a default, scope, and whether fresh confirmation is required; do not invent permission for additional actions.

## Git modes

- User-managed: no staging, commits, pushes, branch changes, or synchronization mutations by the agent.
- Agent commits: authorized documentation changes may be staged and committed; no push.
- Agent commits and pushes: also push each checkpoint commit to the agreed remote branch.

These permissions cover only the agreed documentation repository (normally the separate .agents repository). They do not cover the parent application's Git operations or unrelated files in a general-purpose repository.

## Default rules for agent-managed documentation

Resolve repository identity before mutation. Use the documentation repository as the Git working directory. Do not assume a folder is a separate repository merely because it is named .agents.

1. Inspect branch and status before changing files. If changes are older, unfamiliar, or not attributable to or explicitly acknowledged in this session, stop mutations in that worktree and let the user resolve them. Do not stash, discard, or absorb them.
2. Commit and push only on agent. Never commit/push main or merge, rebase, cherry-pick, or otherwise integrate agent into main. Do not create or complete a PR into main.
3. If on clean main, switch to agent before editing. Known session changes may be carried across only if Git preserves them. If agent does not exist, obtain authorization to create it; do not invent its base. If on another branch, ask the user.
4. Compare agent with local main before editing. Continue if agent contains main; fast-forward agent with git merge --ff-only main when strictly behind. If diverged, stop for the user's decision. Fetching may verify synchronization but does not authorize changing main.
5. Never reset hard, destructively clean, restore away user work, rewrite published history, or switch branches in a way that overwrites changes.
6. If unexpected changes appear, continue mutations only once their ownership/scope is established.

Repository-specific restrictions also apply. A conflicting standing requirement to always commit/push must be reconciled with the user's selected mode before Git mutations; do not silently change repository policy. Explicit user instructions take precedence.

## Automatic meaningful checkpoints

After session authorization, do not request permission for each eligible commit/push. Checkpoint when:
- An approved overview, phase, or implementation plan is recorded.
- An approved important decision changes scope, acceptance, or a shared contract.
- A coherent documentation revision is complete.
- A completion handoff is recorded after user review and acceptance, or a blocked/pause handoff is recorded after explicit approval to hand off that incomplete state.

These checkpoints do not authorize early plan or handoff writes: discussion replies do not trigger saved plan revisions, and review-pending results do not trigger handoffs.

Group edits belonging to one decision. Do not commit every keystroke, unapproved draft as approved, or unrelated changes. Implementation changes in an application repository are outside this permission.

For each checkpoint:
1. Review status and final diff, including document references.
2. Stage explicit paths attributable to the checkpoint; avoid broad staging that could include unrelated files.
3. Use a meaningful subject, for example: "record approved phase 02 implementation plan" or "document phase 03 handoff".
4. Verify commit success and included paths.
5. In commits-and-pushes mode, push agent to origin/agent (or an explicitly agreed permitted remote target), and verify success.
6. Report the checkpoint concisely. If an operation fails, preserve local work and report the actual state. Do not force-push or loop indefinitely. Ask for required reconciliation/permission when necessary.

Before completion, verify intended checkpoint changes are committed and, if authorized, pushed. If blocked, state what remains local instead of claiming Git completion.
