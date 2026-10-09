Clipboard copies text to the system clipboard and confirms success so people can reuse values without manual selection. It turns copy into a deliberate, accessible action with clear feedback.

Prefer Clipboard for shareable strings such as codes, links, and IDs. Avoid silent copy on navigation or hover when people did not choose to copy.

## Best practices

**Label the action.** Use a verb people recognize — Copy, Copy link, Copy code — and expose an accessible name when the control is icon-only.

**Confirm success briefly.** Show a toast, inline “Copied,” or a checkmark state that resets after a few seconds so people know the action worked.

**Copy the value people expect.** Copy the canonical string (full URL, raw token, formatted ID) rather than visible truncation unless truncation is explicitly what they need.

**Handle failure gracefully.** When the Clipboard API is blocked, offer a fallback such as selecting text in a read-only field or explaining how to copy manually.

**Protect sensitive data.** Do not copy secrets into shared clipboards without context; pair high-risk values with short-lived display and clear warnings when appropriate.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Place Copy beside the value it affects and confirm success in place or with a short toast.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Copy on every click of a row or card without an explicit copy control.</figcaption>
</figure>
</div>

## Content

Keep copied strings free of decorative characters unless formatting is part of the contract (for example, a markdown snippet). When copying JSON or code, preserve line breaks people will paste elsewhere.

## Related patterns

| Need | Prefer |
| --- | --- |
| One-click copy with feedback | **Clipboard** |
| Read-only value beside copy | [Input](/vue/components/input/design) + Clipboard |
| Shareable link in a dense list | Clipboard + [Button](/vue/components/button/design) |
| Long-form copyable content | [Prose](/vue/components/prose/design) + explicit Copy |
