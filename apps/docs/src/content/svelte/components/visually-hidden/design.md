Visually Hidden removes text from the visual layout while keeping it available to screen readers and other assistive technology. It bridges gaps where sighted users get context from iconography, layout, or proximity that auditory or braille users would otherwise miss.

Use it sparingly to supplement — not replace — good visible labels. Prefer visible text for everyone when space allows.

## Best practices

**Prefer visible labels first.** Add visually hidden text only when the visible design cannot reasonably include words everyone needs.

**Name icon-only controls.** Pair every icon button with a concise accessible name, often via visually hidden text inside the control.

**Describe non-text cues.** When status is color-only for sighted users, hide equivalent words (“Error”, “Required”) for assistive tech.

**Do not hide focusable content incorrectly.** Elements people must see should not use clipping that removes them from the accessibility tree inappropriately — follow the primitive’s intended pattern.

**Keep hidden strings maintainable.** Reuse the same copy source as visible UI when both exist to avoid drift.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Add “Close” as visually hidden text on an icon-only dismiss control.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide long instructions only in visually hidden blocks sighted users never see — show helper text in the [Field](/svelte/components/field/design).</figcaption>
</figure>
</div>

## Relationship to aria-label

When a control has no inner text, `aria-label` or visually hidden content both work; choose one consistent approach per codebase and avoid duplicating redundant announcements.

## Related patterns

| Need | Prefer |
| --- | --- |
| Screen-reader-only supplement | **Visually Hidden** |
| Visible control name | Label or [Field](/svelte/components/field/design) |
| Short hover hint | [Tooltip](/svelte/components/tooltip/design) |
| Skip repetitive nav | [Skip Nav](/svelte/components/skip-nav/design) |
