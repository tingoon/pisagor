Circular progress shows how far along a task is on a circular track, including indeterminate loading when the percentage is unknown. The ring fits compact spaces where a horizontal bar would feel awkward.

Prefer circular progress when a ring matches the layout and percentage matters; prefer [Spinner](/astro/components/spinner/design) for brief waits with no meaningful progress. Prefer [Progress](/astro/components/progress/design) when a linear bar reads more naturally in wide layouts.

## Best practices

**Prefer determinate when you can measure.** Show real progress for uploads and multi-step jobs; switch to indeterminate only while duration is unknowable.

**Label the value when space allows.** Percentage or step count beside the ring keeps meaning accessible beyond the visual arc.

**Do not fake progress.** Indeterminate animation should not imply a false percentage; jump to determinate when data arrives.

**Keep motion subtle.** Continuous spin for indeterminate states should respect reduced-motion settings.

**Size for legibility.** Tiny rings in dense tables may need a tooltip or adjacent text for the same information.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show 68% or step 3 of 5 next to the ring for long operations.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a percentage ring for a two-second action where a spinner is enough.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Circular measured progress | **Circular Progress** |
| Brief unknown wait | [Spinner](/astro/components/spinner/design) |
| Horizontal progress bar | [Progress](/astro/components/progress/design) |
| Button in-flight state | [Button](/astro/components/button/design) loading |
