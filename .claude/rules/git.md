---
paths:
  - "**/*"
---

# Git Workflow

## Branches

Before creating a branch, always sync local `main`:

```bash
git checkout main
git pull origin main
```

Then branch off `main` using:

- `feat/<slug>` — new feature or capability
- `fix/<slug>` — bug fix or correction

PRs always target `main`. Never commit directly to `main`.

## Commits

- Imperative mood: "Add X", "Fix Y", "Remove Z" — not "Added", "Fixed"
- ≤72 characters; no trailing period
- One logical change per commit
- Stage specific files by name — never `git add -A` or `git add .` (risk of committing secrets or unrelated files)
- Never use `--no-verify`
- Always append the Co-Authored-By trailer when Claude authors the commit:

```
Co-Authored-By: Model and Version <noreply@anthropic.com>
```

Pass commit messages via HEREDOC to preserve formatting:

```bash
git commit -m "$(cat <<'EOF'
Concise imperative description

Co-Authored-By: Model and Version <noreply@anthropic.com>
EOF
)"
```

## Pull Requests

Title: ≤70 characters, mirrors the commit message.

Body must contain three sections:

```markdown
## Summary
- What changed and why (1-3 bullets)

## Changes
- `path/to/file.py` — what changed in this file and why
- `path/to/other.tsx` — what changed and why

## Test plan
- [ ] Step to verify the change works
- [ ] Edge case or regression check
```

No auto-merge without explicit user instruction.

## Guardrails

- **Never** `git add -A` or `git add .`
- **Never** `--no-verify` or `--no-gpg-sign`
- **Never** force-push `main`
- **Always** confirm before any destructive git operation (reset --hard, branch -D, etc.)
