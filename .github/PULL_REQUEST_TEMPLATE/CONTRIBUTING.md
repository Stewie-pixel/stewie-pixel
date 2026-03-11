# Pull Request: Auto-update GitHub Stats Card

## Purpose
This pull request sets up an automated update for the GitHub stats card displayed in the README. The card will reflect daily contributions, languages, and commits without requiring manual updates.

## Changes Included
- Introduced a dedicated branch (`stats-update`) for automated stats updates.
- Configured workflow/API endpoint to regenerate the stats SVG daily.
- Updated README to reference the stats card from this branch.

## Benefits
- Ensures GitHub stats are always current.
- Maintains branch protection rules on main while allowing automation.
- Keeps the main branch commit history clean.

## Checklist
- [ ] Workflow/API tested to update SVG correctly.
- [ ] README points to the correct stats card URL.
- [ ] No functional changes to main codebase.

## Notes for Reviewers
- This PR only affects README visualization.
- Recommended merge strategy: **Rebase and merge** for a linear commit history.
- No additional approvals required, as this is an automated update mechanism.
