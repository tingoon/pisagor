Input OTP collects one-time passcodes as separate digit cells so people can paste from SMS, type sequentially, and verify each character at a glance.

Use it for two-factor login, email verification, and recovery codes—not for long-lived passwords.

## Best practices

**Match code length to your backend.** Show exactly the number of digits or characters you issue; do not add spare boxes “for flexibility”.

**Support paste and autofill.** When a full code arrives from the clipboard or SMS, distribute it across cells in one action.

**Move focus predictably.** Advance on entry, retreat on backspace, and keep arrow keys usable for corrections.

**Expose errors without clearing blindly.** Tell people the code failed and let them edit or request a new code instead of wiping input without explanation.

**Offer resend and help outside the cells.** Place “Resend code” and support links below the control, not inside individual boxes.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Provide six cells for a six-digit code with paste support and a clear error message.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use OTP-style boxes for a 32-character API key people need to copy in one piece.</figcaption>
</figure>
</div>

## Security copy

Avoid describing codes in email and UI with different lengths. Timer text for expiry should be plain (“Code expires in 10 minutes”).

## Related patterns

| Need | Prefer |
| --- | --- |
| One-time verification code | **Input OTP** |
| Long-lived secret | [Password Input](/svelte/components/password-input/design) |
| Generic short text | [Input](/svelte/components/input/design) |
| Full sign-in layout | [Field](/svelte/components/field/design) |
