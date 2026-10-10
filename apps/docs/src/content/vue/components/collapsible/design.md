Collapsible hides and reveals a single section behind a trigger so dense layouts stay scannable until detail is needed. It gives people control over one block of content without leaving the page.

Prefer Collapsible for one optional block. Prefer [Accordion](/vue/components/accordion/design) when several related sections expand independently under shared rules.

## Best practices

**Make the trigger descriptive.** The heading should say what appears when expanded so people can decide without opening the section.

**Preserve state when it matters.** Remember expanded state across revisits when users rely on always-open detail; reset when the underlying data changes category.

**Animate height with care.** Expand and collapse should feel continuous; honor reduced motion by shortening or removing animation.

**Keep focus manageable.** When expanded content includes interactive controls, ensure keyboard users can reach them in a logical order and return to the trigger easily.

**Do not hide required fields.** Never tuck mandatory form inputs inside a collapsed section unless the trigger clearly states that required information lives there.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a clear section title as the trigger and show optional detail on demand.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Nest many collapsibles inside each other when a flatter layout or tabs would scan faster.</figcaption>
</figure>
</div>

## Disclosure pattern

Treat collapsible content as supplementary unless labeled otherwise. Lead with the summary people need for the task; put lengthy help, legal text, or advanced settings behind the trigger.

## Related patterns

| Need | Prefer |
| --- | --- |
| One show/hide section | **Collapsible** |
| Multiple expandable sections | [Accordion](/vue/components/accordion/design) |
| Peer views switched often | [Tabs](/vue/components/tabs/design) |
| Lightweight hint on hover | [Tooltip](/vue/components/tooltip/design) |
