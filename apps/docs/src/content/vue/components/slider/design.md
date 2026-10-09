A slider lets people choose a value along a continuous or stepped track by dragging a thumb or using the keyboard. It works well when the range is understood and seeing the whole span helps judgment — volume, opacity, price bounds, or filter thresholds.

Prefer Slider when adjustment is exploratory and approximate; prefer [Number Input](/vue/components/number-input/design) when people need an exact typed value. Prefer [Progress](/vue/components/progress/design) when showing completion, not setting a value.

## Best practices

**Expose the current value.** Show the selected number or label near the thumb or in an associated field so people know what they chose without guessing from position alone.

**Define sensible bounds and steps.** Set min, max, and step size to match real constraints; avoid ranges so wide that small movements cause huge jumps.

**Track the thumb during drag.** Move the thumb one-to-one with the pointer for the whole gesture so the control feels direct and interruptible.

**Support keyboard and pointer equally.** Arrow keys, Home, and End should nudge or jump predictably; ensure a visible focus ring on the thumb.

**Pair with labels when meaning is not obvious.** End labels, marks, or a short caption clarify what “more” and “less” represent.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show min, max, or current value when the track alone would be ambiguous.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a slider for a small set of named choices — a [Segment Group](/vue/components/segment-group/design) or [Select](/vue/components/select/design) is clearer.</figcaption>
</figure>
</div>

## Range and dual thumbs

When selecting an interval, use two thumbs with a clear filled range between them. Keep both thumbs reachable on narrow viewports and announce the interval to assistive technology.

## Related patterns

| Need | Prefer |
| --- | --- |
| Continuous or stepped value on a track | **Slider** |
| Exact numeric entry | [Number Input](/vue/components/number-input/design) |
| Circular or radial control | [Circular Slider](/vue/components/circular-slider/design) |
| Read-only completion | [Progress](/vue/components/progress/design) |
| On/off setting | [Switch](/vue/components/switch/design) |
