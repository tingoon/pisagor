---
"@pisagor/vue": minor
---

Vue `PasswordInput` parts are thin 1:1 Ark wrappers; the shorthand keeps its API and adds
`classNames` (`PasswordInputContract`). Adds `PasswordInput.Label`.

**Breaking (Vue):**

- `Control` and `Input` no longer render `InputGroup` / `InputGroup.Input`; pass them with
  `as-child`.
- `VisibilityTrigger` no longer wraps itself in an `InputGroup.Addon` / button or renders eye
  icons; it keeps the localized `aria-label`. Use `PasswordInput.Indicator` (with a `#fallback`
  slot) for your eye icons.
