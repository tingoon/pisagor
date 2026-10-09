Number Input captures numeric values—quantities, amounts, durations—with optional steppers, min/max bounds, and formatting suited to math, not free text.

Prefer Number Input over plain [Input](/solid/components/input/design) when increment/decrement or numeric validation is core to the task; still wrap in [Field](/solid/components/field/design) when labels and errors ship together.

## Best practices

**Expose step size intentionally.** Match step to the domain—whole items versus fractional weights—and show units beside the value when ambiguity exists.

**Clamp with feedback, not silence.** When someone hits min or max, explain the limit instead of ignoring clicks.

**Allow direct typing.** Steppers help nudging; keyboard entry must remain for large jumps and paste.

**Respect locale for display, not logic.** Store normalized numbers; format separators in the UI without breaking parsing.

**Pair with clear units.** “kg”, “%”, or “minutes” in the label or suffix prevent costly misreads.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Label “Quantity (items)” with steppers of 1 and a minimum of 1 for cart lines.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a number input for credit card or phone strings that are not arithmetic quantities.</figcaption>
</figure>
</div>

## Steppers

Stepper buttons should respond on press with immediate value updates. Disable increment at max and decrement at min rather than wrapping unexpectedly.

## Related patterns

| Need | Prefer |
| --- | --- |
| Numeric entry with steppers | **Number Input** |
| Generic text | [Input](/solid/components/input/design) |
| Label and error stack | [Field](/solid/components/field/design) |
| Continuous range | [Slider](/solid/components/slider/design) |
| Locale display only | [Format](/solid/components/format/design) |
