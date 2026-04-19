---
description: "Stage, commit, push, and raise a PR for the current changes"
---

# Commit

Run the full git flow — stage → commit → push → PR — in one uninterrupted sequence.

## Steps

### 1. Assess state

Run these in parallel to understand what changed:

```bash
git status
git diff
git log --oneline -10
```

Use the diff to understand the nature of the change (feature vs fix) and the log to match the existing commit style in this repo.

### 2. Branch check

- If currently on `main`: first pull the latest, then create a branch:

  ```bash
  git pull origin main
  git checkout -b feat/<slug>   # or fix/<slug>
  ```

  Infer `feat` vs `fix` from the nature of the changes.

- If already on a `feat/*` or `fix/*` branch: skip this step.

### 3. Stage files

Add specific files by name — never `git add -A` or `git add .`. Exclude `.env`, credentials, and lock files unless the user explicitly requests them.

### 4. Commit

Write a concise, imperative-mood message (≤72 chars, no trailing period). Pass it via HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
Imperative description of the change

Co-Authored-By: Model and Version <noreply@anthropic.com>
EOF
)"
```

### 5. Push

```bash
git push -u origin <branch>
```

### 6. Raise PR

```bash
gh pr create --base main --title "<commit title>" --body "$(cat <<'EOF'
## Summary
- <what changed and why — 1-3 bullets>

## Changes
- `path/to/file` — what changed and why
- `path/to/other` — what changed and why

## Test plan
- [ ] <verification step>
- [ ] <regression check>
EOF
)"
```

The PR body must always include all three sections. The `## Changes` section should be thorough — one line per modified file explaining what changed and why.

### 7. Return the PR URL to the user.
