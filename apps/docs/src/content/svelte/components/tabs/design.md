Tabs organize related content into panels people switch between without leaving the page. Each tab label previews its panel; only one panel is primary at a time, which keeps peer views easy to compare mentally but not on screen simultaneously.

Prefer Tabs for sibling sections of one subject; prefer [Segment Group](/svelte/components/segment-group/design) for compact mode switches (list vs grid). Prefer [Steps](/svelte/components/steps/design) when order and completion through a process matter.

## Best practices

**Write specific tab labels.** “Billing” and “Security” beat “Tab 1”; people should predict panel content before activating.

**Keep the tab set small.** Roughly two to seven tabs remain scannable; overflow into a menu when the set grows.

**Preserve panel state when helpful.** Retain scroll position or draft input when switching back if losing work would frustrate.

**Mount panels deliberately.** Lazy-load heavy panels on first visit; announce the active tab to assistive technology.

**Do not nest tabs deeply.** One tab strip per level; use headings or links inside a panel for further structure.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use tabs for peer sections people compare over a session, such as Details and Activity.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force a checkout wizard into tabs when step order and validation belong in [Steps](/svelte/components/steps/design).</figcaption>
</figure>
</div>

## Keyboard and focus

Arrow keys move between tabs; activation shows the associated panel and moves focus into panel content when appropriate. Visible focus on the active tab is required.

## Related patterns

| Need | Prefer |
| --- | --- |
| Peer content panels | **Tabs** |
| Compact view or filter mode | [Segment Group](/svelte/components/segment-group/design) |
| Linear staged flow | [Steps](/svelte/components/steps/design) |
| Expandable sections | [Accordion](/svelte/components/accordion/design) |
