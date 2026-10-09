Input Group merges a text field with attached icons, labels, or buttons so related affordances read as one control. It keeps search icons, currency prefixes, and copy actions visually and logically tied to the value they modify.

Prefer Input Group when adornments are decorative or tightly coupled to the field; prefer separate [Button](/svelte/components/button/design) placement when the action applies to the whole form, not the value in the box.

## Best practices

**Keep one primary action per group.** A search icon plus Clear is fine; avoid three competing buttons on the same edge.

**Make adornments meaningful.** Use icons that reinforce purpose (search, link, currency) and give icon-only buttons accessible names.

**Preserve focus order.** Tab through the field and its inline buttons in a sequence that matches visual layout.

**Align heights and borders.** Shared padding and a single outline make the group feel like one input, not glued pieces.

**Do not nest complex widgets inside the group.** Date pickers and selects usually deserve their own field layout rather than crowding the text slot.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Attach a currency prefix and a single Copy button to an account number field.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide the only Submit action inside a suffix button on the last field of a long form.</figcaption>
</figure>
</div>

## With Field

Wrap the group in [Field](/svelte/components/field/design) when the label applies to the whole control, including prefixes and suffixes.

## Related patterns

| Need | Prefer |
| --- | --- |
| Input with attached chrome | **Input Group** |
| Plain single-line entry | [Input](/svelte/components/input/design) |
| Accessible label stack | [Field](/svelte/components/field/design) |
| Phone numbers with country | [Phone Input](/svelte/components/phone-input/design) |
