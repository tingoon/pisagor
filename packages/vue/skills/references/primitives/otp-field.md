# Pisagor Vue — OtpField

## When to use

- Combines Field and InputOTP with separate digit slots and optional error message.

## Canonical import

```ts
import { OtpField } from "@pisagor/vue-form"
import { PhPlus } from "@phosphor-icons/vue"
```

## Source of truth

| Resource | Path |
|----------|------|
| Source | `@pisagor/vue-form` → `src/fields/otp-field/` |
| Examples | MCP `get_example` / `list_examples` |

## Usage

1. Prefer MCP `get_example` for composition examples.
2. Style with `class` for layout; prefer recipe `variant` / `size`.
3. Do not invent props — confirm from source / index exports.

## Common pitfalls

- Mixing frameworks — this guide is **vue** only (`@pisagor/vue`).
- Treating shorthand as a composition root when `Foo.Root` is required.
- Calling `tv()` in app code — use `@pisagor/recipes`.

