# @pisagor/styles

Shared `tailwind-variants` (`tv`) recipes for Pisagor components.

```text
src/
├── ui/       component recipes — `@pisagor/styles/ui/<name>`
└── blocks/   composed block recipes — `@pisagor/styles/blocks/<name>`
```

```ts
import {
  accordionItemVariants,
  accordionTriggerVariants,
} from "@pisagor/styles/accordion";

cn(accordionItemVariants(), className);
```

There is no root barrel — import each recipe path.

**Tailwind scan:** framework style entries must `@source` this package so utilities used in recipes are generated.
