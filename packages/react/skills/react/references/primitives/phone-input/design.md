Phone Input collects international phone numbers with country selection and formatting as people type. It reduces errors by showing the expected pattern for each region while keeping a single field easy to scan.

Prefer Phone Input when numbers cross borders or need E.164-style validation; prefer a plain [Input](/react/components/input/design) when the format is fixed and local. Pair with [Field](/react/components/field/design) for labels, errors, and helper text.

## Best practices

**Default the country thoughtfully.** Use locale or account settings for the initial country code, and let people change it without losing digits they already entered.

**Format as they type, not after submit.** Live grouping and spacing help people catch mistakes early; validate on blur or submit with a clear error if the number is incomplete.

**Keep the country control reachable.** The selector should be keyboard operable and labeled so screen reader users know which region applies.

**Expose the full number when needed.** For verification flows, confirm the complete number (including country code) before sending codes.

**Respect SMS and voice constraints.** Disable submit until the number passes validation, and explain why when a region is unsupported.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair country selection with inline formatting and a labeled field that states what number you need (mobile, work, etc.).</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Split country and number across unrelated fields with no shared label or validation message.</figcaption>
</figure>
</div>

## Validation

Show errors next to the field, not only in a summary. Accept pasted numbers when possible and normalize before storage. Avoid stripping leading zeros people expect to see in display copy.

## Related patterns

| Need | Prefer |
| --- | --- |
| International phone with country | **Phone Input** |
| Fixed-format local number | [Input](/react/components/input/design) |
| Label, error, and helper layout | [Field](/react/components/field/design) |
| One-time codes | [Input OTP](/react/components/input-otp/design) |
