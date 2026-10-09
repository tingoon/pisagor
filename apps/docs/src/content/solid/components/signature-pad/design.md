Signature Pad captures a handwritten signature on a canvas for approvals, contracts, and compliance forms. It turns pointer or stylus input into an image or vector record people can review before submitting.

Use Signature Pad only when a drawn signature is legally or procedurally required; prefer typed name confirmation or checkbox attestation when law and policy allow simpler consent.

## Best practices

**State legal purpose plainly.** Tell people they are signing an agreement and link to the document being accepted.

**Offer clear and undo.** Reset wipes the canvas; undo stroke-by-stroke when supported so mistakes are cheap to fix.

**Size the canvas for fingers.** Adequate height and width on touch devices prevent cramped, illegible signatures.

**Require review before submit.** Show a preview or disable submit until ink is present so empty submissions do not slip through.

**Provide a non-draw fallback when possible.** Typed signature or upload may be required accessibility alternatives — document your policy.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair the pad with consent copy, Clear control, and disabled Submit until a signature exists.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a tiny canvas in a dense form where users cannot sign legibly or see what they drew.</figcaption>
</figure>
</div>

## Storage

Persist signatures in the format your backend expects (PNG, SVG, or points) and treat them as sensitive data with appropriate retention and access controls.

## Related patterns

| Need | Prefer |
| --- | --- |
| Handwritten capture | **Signature Pad** |
| Checkbox agreement | [Checkbox](/solid/components/checkbox/design) |
| File upload of signed PDF | [File Upload](/solid/components/file-upload/design) |
| Form layout and errors | [Field](/solid/components/field/design) |
