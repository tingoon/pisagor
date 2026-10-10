Toggle Group presents a row of related toggle buttons where people choose one option (single selection) or several (multiple selection) without opening a menu. It suits filters, view modes, and formatting clusters.

Prefer Toggle Group when options are visible at once and toggled state matters; prefer [Segment Group](/solid/components/segment-group/design) for compact segmented single-choice switches. Prefer [Button Group](/solid/components/button-group/design) when controls are actions, not latched state.

## Best practices

**Label the group.** Provide a visible or accessible group label so screen readers understand the set (“Alignment”, “Visibility”).

**Enforce selection rules explicitly.** Single-select groups should deselect the previous item; multi-select should allow independent toggles.

**Keep options parallel.** Each item should be the same kind of thing — all view modes or all filters — not mixed verbs and nouns.

**Limit width on small screens.** Wrap, scroll horizontally with care, or collapse to a menu when the set exceeds roughly five visible items.

**Mirror selection in the URL or model when it drives content.** Changing the pressed toggle should update the view predictably.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use toggle group for visible filter chips that stay on until turned off.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use toggle group for a single exclusive choice that looks like navigation — [Tabs](/solid/components/tabs/design) or [Segment Group](/solid/components/segment-group/design) may fit better.</figcaption>
</figure>
</div>

## Keyboard

Arrow keys move between items; Space or Enter toggles the focused item according to single or multiple selection mode.

## Related patterns

| Need | Prefer |
| --- | --- |
| Visible toggled option set | **Toggle Group** |
| Compact single choice | [Segment Group](/solid/components/segment-group/design) |
| Action cluster | [Button Group](/solid/components/button-group/design) |
| Single toolbar toggle | [Toggle](/solid/components/toggle/design) |
