Progress shows how far along a task is on a linear track. Determinate progress communicates measurable completion; indeterminate motion signals work in progress when the duration or steps are unknown.

Prefer Progress when people benefit from a sense of advancement; prefer [Circular Progress](/svelte/components/circular-progress/design) in compact or radial layouts. Prefer [Spinner](/svelte/components/spinner/design) for very short waits with no meaningful percentage, and [Skeleton](/svelte/components/skeleton/design) when placeholder layout matters more than a bar.

## Best practices

**Prefer determinate when you can measure.** Tie value to real milestones — bytes uploaded, steps completed — and update smoothly without jumping backward unless work actually regressed.

**Use indeterminate honestly.** When duration is unknown, an indeterminate track sets expectation better than a fake percentage.

**Label the task, not only the bar.** Pair with concise text (“Uploading photos…”) so meaning is clear without relying on color alone.

**Avoid progress for instant actions.** Sub-second operations feel slower when a bar flashes; use inline feedback instead.

**Respect reduced motion.** Offer a static or minimally animated indeterminate state when motion is reduced.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show determinate progress for multi-step or measurable jobs with a short status label.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Display a progress bar that stalls at 99% while unknown work continues — switch to indeterminate or explain the wait.</figcaption>
</figure>
</div>

## Layout

Keep the track wide enough to read at a glance in forms and toolbars. In dense rows, a thin track with adjacent text often scans better than a bar alone.

## Related patterns

| Need | Prefer |
| --- | --- |
| Linear measurable completion | **Progress** |
| Compact circular indicator | [Circular Progress](/svelte/components/circular-progress/design) |
| Indeterminate short wait | [Spinner](/svelte/components/spinner/design) |
| Loading placeholder layout | [Skeleton](/svelte/components/skeleton/design) |
