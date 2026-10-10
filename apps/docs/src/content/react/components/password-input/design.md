Password Input collects secret credentials with a show-hide control so people can verify typing without leaving the field masked forever.

It builds on the same single-line model as [Input](/react/components/input/design) but adds privacy affordances; wrap both in [Field](/react/components/field/design) for labels, strength hints, and errors. Prefer [Input OTP](/react/components/input-otp/design) for short one-time codes, not stored passwords.

## Best practices

**Default to masked.** Reveal only on explicit toggle; return to hidden when focus leaves if your security model requires it.

**Label the show action clearly.** “Show password” / “Hide password” beats icon-only unless the icon has an accessible name.

**Do not block paste.** Password managers rely on paste; preventing it frustrates users without improving security.

**Validate requirements inline.** Length and character rules belong beside the field before submit.

**Never echo passwords in errors or logs.** Failure messages should be generic (“Couldn’t sign in”) while inline validation stays specific to format rules.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Provide a labeled password field with show-hide and inline rule hints.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a plain visible Input for passwords because masking feels inconvenient.</figcaption>
</figure>
</div>

## With Input Group

When a password field shares a row with a visibility toggle or strength meter, compose with [Input Group](/react/components/input-group/design) so the control reads as one unit.

## Related patterns

| Need | Prefer |
| --- | --- |
| Masked credential entry | **Password Input** |
| Generic single-line text | [Input](/react/components/input/design) |
| One-time verification digits | [Input OTP](/react/components/input-otp/design) |
| Label, hint, error layout | [Field](/react/components/field/design) |
| Attached toggle chrome | [Input Group](/react/components/input-group/design) |
