# @pisagor/recipes

Shared `tailwind-variants` (`tv`) recipes for Pisagor components.

```text
src/
├── ui/       component recipes — `@pisagor/recipes` / `@pisagor/recipes/<name>`
└── blocks/   composed block recipes — `@pisagor/recipes/blocks/<name>`
```

```ts
import { accordionItemVariants, buttonVariants } from "@pisagor/recipes";
// or a tight import:
import { buttonVariants } from "@pisagor/recipes/button";

cn(buttonVariants().base(), className);
```

Prefer `@pisagor/recipes/<name>` when you need a tight import graph; use `@pisagor/recipes` when importing several recipes.

**Tailwind scan:** framework style entries must `@source` this package so utilities used in recipes are generated.
