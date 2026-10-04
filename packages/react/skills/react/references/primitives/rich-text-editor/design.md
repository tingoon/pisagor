Rich Text Editor lets people compose formatted documents and messages with a toolbar for styles, lists, links, and other structure. It balances expressive writing with constraints your product needs for storage and display.

Prefer Rich Text Editor when authors need inline formatting in flow; prefer [Prose](/react/components/prose/design) for rendering stored HTML or markdown read-only. Prefer a plain [Textarea](/react/components/textarea/design) when formatting is unnecessary.

## Best practices

**Expose only supported formats.** Toolbar actions should match what you sanitize and store — hide bold if you strip it on save.

**Keep the toolbar scannable.** Group related actions; move rarely used tools into overflow menus on narrow widths.

**Label actions for accessibility.** Icon buttons need names; active states (bold on) should be exposed to assistive technology.

**Preserve focus while editing.** Do not trap keyboard users; support standard shortcuts where they match platform expectations.

**Show saving and errors inline.** Draft status, upload failures, and length limits belong near the editor, not only in toasts.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Limit the toolbar to formats you persist and render consistently in Prose or your preview.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Mirror a full desktop word processor when comments or posts only need paragraphs and links.</figcaption>
</figure>
</div>

## Content safety

Sanitize pasted HTML and uploaded media. Prefer allowlists for tags and attributes so displayed content stays safe in [Prose](/react/components/prose/design) views.

## Related patterns

| Need | Prefer |
| --- | --- |
| Formatted authoring | **Rich Text Editor** |
| Read-only article body | [Prose](/react/components/prose/design) |
| Plain multi-line text | [Textarea](/react/components/textarea/design) |
| Single-line with mentions | [Input](/react/components/input/design) / [Tags Input](/react/components/tags-input/design) |
