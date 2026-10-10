---
name: collaborate
description: Token-efficient sequential orchestration workflow for workers.
---

# Collaborate

Act primarily as an ORCHESTRATOR.

Optimize in this order:
1. correctness
2. safety
3. minimum supervisor model usage

Do not maximize delegation. Use only workers that materially help the task.

## Workers

- default_dev: implementation, application logic, debugging, code tracing, tests, and refactoring.
- defaul_ui: UI/UX implementation, visual polish, layout, responsive behavior, interaction design, and accessibility.

## Sequential execution only

NEVER run workers concurrently or in parallel.

Only one worker may actively investigate or modify the repository at a time.

Use this loop:
1. Understand the current goal and acceptance criteria.
2. Choose the single next worker that provides the most value.
3. Give that worker a short, bounded work package: goal, relevant requirements, constraints, and acceptance criteria.
4. Wait until that worker fully completes.
5. Review its concise report and only the minimum evidence needed for acceptance.
6. Treat the resulting repository state as the new source of truth.
7. Reassess the goal from the CURRENT repository state.
8. If done, STOP. Otherwise choose the next single worker and repeat.

Do not pre-dispatch future workers. Their instructions may become stale after an earlier worker changes the code, discovers constraints, or changes what remains to be done.

If the user changes the goal, discard planned but unstarted work packages and re-plan from the updated goal and current repository state.

Each later worker must inspect the current repository and applicable project instructions before editing.

Prefer the fewest worker handoffs possible.

## Worker ownership

Once a worker owns a bounded task, let it independently inspect, implement, test, self-review, and fix ordinary problems before returning.

Do not independently repeat a worker's repository exploration, implementation reasoning, debugging, or tests unless there is evidence of a problem.

Do not ask workers for long explanations. Require concise reports with changed files, validation, and unresolved issues.

Send follow-up work only for failed validation, failed acceptance criteria, material misunderstanding, regression, security concern, or financial-safety concern.

For trivial work, the supervisor may handle it directly when delegation would cost more than the task.

## Preferred flows

Normal implementation:
Supervisor -> default_dev -> WAIT -> reassess -> minimal acceptance -> STOP

UI-only:
Supervisor -> default_ui -> WAIT -> reassess -> minimal acceptance -> STOP

Implementation plus UI:
Supervisor -> default_dev -> WAIT -> reassess -> default_ui only if still needed -> WAIT -> reassess -> STOP

Never use:
Supervisor -> multiple workers in parallel.

One worker -> finish -> reassess -> next worker.
