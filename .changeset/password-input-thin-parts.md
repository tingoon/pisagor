---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `PasswordInput` parts are thin 1:1 Ark wrappers; the shorthand keeps its API and adds
`classNames` (`PasswordInputContract`). Adds `PasswordInput.Label` and `indicator` / `input` /
`label` / `visibilityTrigger` recipe slots.

**Breaking (React):**

- `Control` and `Input` no longer render `InputGroup` / `InputGroup.Input`; pass them with
  `asChild`.
- `VisibilityTrigger` no longer wraps itself in an `InputGroup.Addon` / button or renders eye
  icons; it keeps the localized `aria-label`.
- `PasswordInput.Root` accepts all Ark root props.
