---
root: false
targets:
  - "*"
description: "Authoring rules for develop.mdx docs pages, their examples, and matching Storybook stories"
globs:
  - apps/docs/src/content/**/develop.mdx
  - apps/docs/src/content/**/compound.mdx
  - apps/docs/src/content/components/**/design.mdx
  - apps/docs/src/content/components/**/meta.md
  - apps/docs/src/content/**/forms/*.mdx
  - apps/docs/src/content/**/blocks/*.mdx
  - packages/*/examples/**/*
  - apps/*/src/**/*.stories.tsx
cursor:
  alwaysApply: false
---

# Develop docs (`develop.mdx`)

Applies to `apps/docs/src/content/<framework>/components/<id>/develop.mdx`, form pages at `…/forms/<id>.mdx`, block pages at `…/blocks/<id>.mdx`, the examples in `packages/<framework>(-form)/examples/<group>/<id>/` (or `apps/docs/src/blocks/<framework>/<group>/<id>/` for blocks), and `<id>.stories.tsx`. Groups match docs sidebar sections (`actions`, `fields`, …). Judge each component on its own; never apply these rules mechanically.

Shared component copy lives in `apps/docs/src/content/components/<id>/`: `meta.md` (title, description, api, taxonomy — `api` is the same on every framework) and `design.mdx`. Framework folders `content/<framework>/components/<id>/` keep `develop.mdx` and, when there is a compound surface, `compound.mdx`. `compound.mdx` is the `/develop/compound` page: compound part anatomy plus compound examples. The develop page itself stays the shorthand surface (no `### Compound` example). Design links to other components use `<DocLink id="…" />`, not a framework-prefixed path. Design copy does not name a framework or a framework-specific tool. Forms: one file `forms/<id>.mdx` with frontmatter + **When to use** + develop body (`## Import`, `## Examples`, …) — no design/develop tabs. Blocks: one file `blocks/<id>.mdx` with frontmatter (`title`, `description`) and the page body.

In component `design.mdx`, use injected `<DoDont do="…" dont="…" />` for guideline pairs (optional `doSrc` / `dontSrc` + alt/size props) and `<DocLink id="…" />` for links to other components. Do not hand-write Do/Don’t HTML or global CSS — the component is Tailwind-only and injected like `Example`.

## Page structure

**`develop.mdx` (shorthand):**

1. `## Import`
2. `## Anatomy` — a single heading. No Shorthand, Closed, or Compound subheadings. The block is the shorthand (or the only public tree). No props or content in the block.
3. `## Examples` — `###` per example, each followed by one short description and an `<Example />`.
4. `## Customization` — styling escape hatches (see below).
5. `## Accessibility` — only when it adds real value (keyboard table, ARIA notes). Drop `## Usage` sections; their content belongs in examples.
6. Props are appended by the page — never write them by hand.

**`compound.mdx`:**

1. `## Anatomy` — the compound part tree only. No props or content in the block.
2. `## Examples` — when the component has a shorthand API, include the `### Compound` example here (not on develop).

The docs engine renders every `##` section in place; TOC and page order follow the markdown exactly (`##` → h2, `###` → h3).

## Examples

Example files export only the live component. The Code tab lazy-loads that file as `?raw` from `name` + `exampleId` (no `sources.ts`, no `code` prop).

```ts
// default.tsx — live example only
export function Default() {
  /* … */
}
```

In `develop.mdx` and `compound.mdx`, only pass `name` — `Example` is injected by the doc page; `framework` / `exampleId` / `kind` come from the route:

```mdx
### Default

Short description.

<Example name="Default" />
```

`name` must match the example file stem in kebab-case (`Default` → `default.tsx`, `WithCard` → `with-card.tsx`). Astro previews pass the component as `<Example>` children.

## Example order

On **`develop.mdx`** (shorthand examples only):

1. `Default` first. Omit it only when `Variants` clearly shows the same basic usage (same structure and data, plus variants).
2. Appearance: Variants → Sizes → shape (Pill, Shapes…) → orientation/spacing.
3. Content and composition: With icon…, content slots → `### Composition` (`With form`, `With dialog`…: combining with other components) → `### As child`.
4. Controlled.
5. States: Disabled → Invalid → Readonly → Loading.
6. Behavior tweaks: placement, close behavior, autoplay, delays, selection modes…

On **`compound.mdx`**: `### Compound` first (the Default rewritten with parts). Additional compound-only examples follow under concrete headings (`### Custom item`, `### Grouped`).

## Shorthand vs compound

- Components with a shorthand API (`items`, `title`/`description` props…): write every develop example in shorthand. Put exactly one `### Compound` example on `compound.mdx` — the Default rewritten with parts. The develop anatomy is only the shorthand tree under `## Anatomy`. The compound part tree lives in `compound.mdx` under `## Anatomy`, with the Compound example under `## Examples`.
- Things shorthand cannot do stay on `compound.mdx` under concrete headings (`### Custom item`, `### Grouped`), not under "Compound".
- Compound-only components: no `### Compound` example — the part tree is `## Anatomy` in `develop.mdx` and `compound.mdx`.
- Closed components (single export, parts are not public): `## Anatomy` with the component tag.

## Polymorphism

No "Polymorphism" heading. Use `### As child` inside Examples; several `asChild` examples share that one heading.

## Customization

Split by tool, lightest to most permanent. Each subsection opens with one sentence on when to use it; headings are tool names, never example names.

- `### Class names` — `className` on a single element (CustomColor, CustomSpacing, CustomSize…).
- `### Slot class names` — `classNames={{ … }}` across several parts.
- `### Custom recipe` — `tv({ extend: <recipe> })` passed to the `recipe` prop. Every component that has a recipe and accepts `recipe` gets one small, real brand-look example (see `packages/react/examples/actions/button/custom-recipe.tsx`).
- `### Data attributes` — only when styling by state matters.

"Custom…" examples that change behavior or content (CustomIcon, CustomFormat, CustomTimeout, slot count…) stay in Examples. Classify by what the example does, not by its name.

## Forms

Each field's `Default` is a real basic example: realistic label and placeholder, helper `description` where natural, and copy that differs from the Disabled/Invalid examples. Give it a field-specific one-line description.

## Copy

Short, task-focused, existing tone. No design best practices ("Prefer…", "Keep contrast…") — those belong to the design tab.

## Storybook

Story order matches `develop.mdx` order, with `Playground` first, then any `compound.mdx` examples (e.g. `Compound`). Every `<Example name>` on either page has a story; remove stories for deleted examples. Storybook uses the example barrel (`examples/<group>/<id>/index.ts`); docs live preview loads each example file on demand (not via that barrel).
