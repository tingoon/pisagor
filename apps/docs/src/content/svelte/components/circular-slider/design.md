Circular slider lets people choose a value by dragging around a ring instead of a straight track. The metaphor suits compact controls where rotation maps naturally to the setting — volume, intensity, or angle.

Prefer a linear [Slider](/svelte/components/slider/design) when precision, tick marks, and wide ranges are easier on a horizontal track.

## Best practices

**Show the current value.** Display the number or label near the control so the gesture stays understandable without guessing the angle.

**Define min, max, and step.** Snap to meaningful increments when fine control would be noisy on a small ring.

**Keep the ring large enough.** Small diameters make dragging imprecise; enlarge the touch target or offer numeric input as a fallback.

**Provide keyboard adjustment.** Arrow keys or input companions support people who cannot use circular dragging accurately.

**Give immediate feedback.** The fill or thumb should track the pointer one-to-one during the drag, not only after release.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair the ring with a live value readout and sensible min/max labels.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a tiny circular slider as the only way to enter a precise four-digit quantity.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Rotational value choice | **Circular Slider** |
| Linear range with marks | [Slider](/svelte/components/slider/design) |
| Typed numeric entry | [Number Input](/svelte/components/number-input/design) |
| Compact on/off | [Switch](/svelte/components/switch/design) |
