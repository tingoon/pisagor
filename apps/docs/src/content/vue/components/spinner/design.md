A spinner signals that work is in progress when the wait is short and no meaningful percent complete exists. It reassures people that the system responded without blocking the whole interface.

Prefer Spinner for indeterminate waits under a few seconds; prefer [Progress](/vue/components/progress/design) or [Circular Progress](/vue/components/circular-progress/design) when you can show determinate completion. Prefer [Skeleton](/vue/components/skeleton/design) when layout shape is known and placeholder content reduces perceived wait.

## Best practices

**Size spinners to their context.** Inline spinners stay small beside a label or button; page-level spinners can be larger but should not dominate unless the entire view is blocked.

**Pair with status text when helpful.** “Saving…” or “Loading results” gives meaning beyond motion alone, especially for screen reader users.

**Avoid spinner sprawl.** One indicator per logical operation beats many synchronized spinners on every row.

**Respect reduced motion.** Offer a static or subtle pulse alternative when people prefer less animation.

**Remove spinners promptly.** Hide the indicator as soon as content or the action finishes so the UI returns to a calm state.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Place a single spinner on the control or region that is actually waiting.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Leave a spinner running indefinitely without error handling or a way to cancel a stuck request.</figcaption>
</figure>
</div>

## Buttons and forms

When a button triggers async work, replace or augment its label with a spinner and disable duplicate submits until the operation completes or fails.

## Related patterns

| Need | Prefer |
| --- | --- |
| Indeterminate short wait | **Spinner** |
| Known percentage complete | [Progress](/vue/components/progress/design) |
| Content-shaped placeholder | [Skeleton](/vue/components/skeleton/design) |
| Elapsed time display | [Timer](/vue/components/timer/design) |
