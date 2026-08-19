# Create commit

Group changed files, commit each group with a Conventional Commits message.

The user invoked this command — creating commits is in scope.

## Rules

- [`.cursor/rules/core.mdc`](../rules/core.mdc)
- [`.cursor/rules/tooling.mdc`](../rules/tooling.mdc) — [Commits](../rules/tooling.mdc#commits)

## Path scope (optional)

Restrict to a path when given (e.g. `create-commit apps/react`): use `git status -- <path>` and `git diff -- <path>`.

## Steps

1. **Gather context** (parallel):
   ```bash
   git status
   git diff
   git log -5 --oneline
   ```

2. **Pre-check** — run before staging to surface issues early:
   ```bash
   bunx biome ci
   turbo type-check
   ```
   If checks fail, fix issues first before proceeding to grouping.

3. **Group** by workspace/feature, change type, or dependency order (refactor → feat). Prefer smaller commits.

4. **Commit each group**
   - Stage: `git add <paths>`
   - Message: `<type>(<scope>): <description>` — scopes per [tooling.mdc → Commits](../rules/tooling.mdc#commits)
   - Hook auto-fixed files → new commit, not amend
   ```bash
   git commit -m "$(cat <<'EOF'
   type(scope): description

   EOF
   )"
   ```

## Checklist

- [ ] Pre-check passed (step 2)
- [ ] Every in-scope file in exactly one group
- [ ] Dependencies first (e.g. migration before generated types)
- [ ] No mixed types per commit; no secrets staged
