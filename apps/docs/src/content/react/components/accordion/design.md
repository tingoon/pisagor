An accordion organizes related content into expandable sections so people can scan headings and open only what they need. It saves vertical space when not every section must stay visible at once.

Prefer Accordion when sections are independent and rarely compared side by side; prefer [Tabs](/react/components/tabs/design) when people switch between peer views often.

## Best practices

**Write scannable headings.** Each trigger should summarize the section in a few words so people can decide whether to expand without reading the body.

**Default to what matters.** Open the first or most important section on load; keep the rest collapsed so the page does not feel like a wall of text.

**Allow multiple or single expansion deliberately.** Use single-expand when sections are long or mutually exclusive; use multiple when people may compare answers across sections.

**Keep section bodies focused.** One topic per panel; link out for deep dives instead of nesting another accordion inside.

**Preserve state when it helps.** Remember expanded sections across revisits when returning users expect their place to be restored.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use clear section titles and collapse secondary detail until someone asks for it.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide critical instructions or required fields inside collapsed panels people may never open.</figcaption>
</figure>
</div>

## Interaction

Expand and collapse should respond immediately on activation, with motion that respects reduced-motion preferences. Keyboard users must reach every trigger and move focus logically into expanded content.

When only one section may be open, closing the active section before opening another avoids stacking two large bodies on small screens.

## Related patterns

| Need | Prefer |
| --- | --- |
| Independent expandable sections | **Accordion** |
| Frequent switching between peer views | [Tabs](/react/components/tabs/design) |
| Long hierarchical settings | [Tree View](/react/components/tree-view/design) |
| Static grouped content | [Card](/react/components/card/design) |
