Steps guide people through a multi-step flow — checkout, onboarding, or setup — and show which stage is active, complete, or ahead. The pattern sets expectations about length and progress through a process.

Prefer Steps for linear workflows with a defined order; prefer [Tabs](/solid/components/tabs/design) when any step can be visited freely without implying sequence. Prefer [Segment Group](/solid/components/segment-group/design) for switching peer views, not procedural stages.

## Best practices

**Keep the step count manageable.** Roughly three to seven labeled steps scan well; split very long flows into chapters with substeps only when necessary.

**Label steps with outcomes.** Names like “Shipping” and “Review” beat “Step 2” because they tell people what they will accomplish.

**Show where people can go.** Indicate completed, current, and upcoming steps; disable or hide future steps when prerequisites are not met.

**Validate before advancing.** Confirm the current step’s requirements before moving on so errors stay local to the step that caused them.

**Allow backward movement when safe.** Let people revise earlier steps without losing work unless business rules forbid it.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use clear step titles and mark completed stages so people sense progress through the flow.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use Steps for unrelated settings panels that people hop between in any order — [Tabs](/solid/components/tabs/design) fit that mental model.</figcaption>
</figure>
</div>

## Layout

On narrow screens, collapse the stepper to the current step plus a progress indicator, or use a vertical layout so labels remain readable.

## Related patterns

| Need | Prefer |
| --- | --- |
| Linear multi-step process | **Steps** |
| Peer panels, any order | [Tabs](/solid/components/tabs/design) |
| Compact view switcher | [Segment Group](/solid/components/segment-group/design) |
| First-run highlights | [Tour](/solid/components/tour/design) |
