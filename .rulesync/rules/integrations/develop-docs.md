---
root: false
targets:
  - '*'
description: 'Authoring rules for develop.md docs pages, their examples, and matching Storybook stories'
globs:
  - apps/docs/src/content/**/develop.md
  - packages/*/examples/**/*.tsx
  - apps/*/src/**/*.stories.tsx
cursor:
  alwaysApply: false
---

# Develop docs (`develop.md`)

Applies to `apps/docs/src/content/<framework>/{components,forms}/<id>/develop.md`, the examples in `packages/<framework>(-form)/examples/<id>/`, and `<id>.stories.tsx`. Judge each component on its own; never apply these rules mechanically.

## Page structure

1. `## Import`
2. `## Anatomy` — only for compound-only components (no shorthand). One short `tsx` block with the part tree, no props or content.
3. `## Examples` — `###` per example, each followed by one short description and `:::example Name`.
4. `## Customization` — styling escape hatches (see below).
5. `## Accessibility` — only when it adds real value (keyboard table, ARIA notes). Drop `## Usage` sections; their content belongs in examples.
6. Props are appended by the page — never write them by hand.

The docs engine renders every `##` section in place; TOC and page order follow the markdown exactly (`##` → h2, `###` → h3).

## Example order

1. `Default` first. Omit it only when `Variants` clearly shows the same basic usage (same structure and data, plus variants).
2. Appearance: Variants → Sizes → shape (Pill, Shapes…) → orientation/spacing.
3. Content and composition: With icon…, content slots, then `### Compound` → `### Composition` (`With form`, `With dialog`…: combining with other components) → `### As child`.
4. Controlled.
5. States: Disabled → Invalid → Readonly → Loading.
6. Behavior tweaks: placement, close behavior, autoplay, delays, selection modes…

## Shorthand vs compound

- Components with a shorthand API (`items`, `title`/`description` props…): write every example in shorthand. Add exactly one `### Compound` example — the Default rewritten with parts.
- Things shorthand cannot do stay compound under concrete headings (`### Custom item`, `### Grouped`), not under "Compound".
- Compound-only components: no `### Compound` heading — use `## Anatomy` instead.

## Polymorphism

No "Polymorphism" heading. Use `### As child` inside Examples; several `asChild` examples share that one heading.

## Customization

Split by tool, lightest to most permanent. Each subsection opens with one sentence on when to use it; headings are tool names, never example names.

- `### Class names` — `className` on a single element (CustomColor, CustomSpacing, CustomSize…).
- `### Slot class names` — `classNames={{ … }}` across several parts.
- `### Custom recipe` — `tv({ extend: <recipe> })` passed to the `recipe` prop. Every component that has a recipe and accepts `recipe` gets one small, real brand-look example (see `packages/react/examples/button/custom-recipe.tsx`).
- `### Data attributes` — only when styling by state matters.

"Custom…" examples that change behavior or content (CustomIcon, CustomFormat, CustomTimeout, slot count…) stay in Examples. Classify by what the example does, not by its name.

## Forms

Each field's `Default` is a real basic example: realistic label and placeholder, helper `description` where natural, and copy that differs from the Disabled/Invalid examples. Give it a field-specific one-line description.

## Copy

Short, task-focused, existing tone. No design best practices ("Prefer…", "Keep contrast…") — those belong to the design tab.

## Storybook

Story order matches `develop.md` order, with `Playground` first. Every `:::example` has a story; remove stories for deleted examples. Keep example barrels (`index.ts` + `sources.ts`) in sync.
