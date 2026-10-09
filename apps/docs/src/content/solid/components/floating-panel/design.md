A floating panel presents optional tools or inspectors in a draggable, resizable window above the workspace. It keeps the main canvas unobstructed while giving power users a place for palettes, logs, or property editors that can move out of the way.

Prefer Floating Panel when the tool is auxiliary and may stay open alongside work; prefer [Drawer](/solid/components/drawer/design) or [Sheet](/solid/components/sheet/design) when the content is a focused task flow. Prefer [Dialog](/solid/components/dialog/design) when the user must complete or dismiss a blocking step.

## Best practices

**Treat the panel as optional chrome.** Open it from a clear control and let people close or minimize it so the workspace returns to a calm default.

**Preserve layout when it matters.** Remember position and size across sessions when users invest time arranging inspectors around their content.

**Keep drag and resize direct.** Track the pointer one-to-one during moves and resizes, rubber-band at sensible minimum sizes, and avoid locking input mid-gesture.

**Anchor the title bar for context.** Use a concise title and primary actions in the header so people always know which tool they are using.

**Avoid stacking many panels.** Offer one or two floating surfaces; additional tools belong in tabs inside the panel or in the main layout.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Float a color picker or inspector that users can park beside the canvas while they edit.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a floating panel for checkout, legal consent, or any flow that must capture full attention.</figcaption>
</figure>
</div>

## Interaction

Support keyboard focus within the panel and a predictable way to return focus to the page when the panel closes. On small viewports, consider collapsing to a sheet instead of a free-floating window.

Respect reduced motion: prefer opacity and subtle scale over long travel animations when the panel appears or docks.

## Related patterns

| Need | Prefer |
| --- | --- |
| Draggable tool or inspector | **Floating Panel** |
| Edge-attached task surface | [Drawer](/solid/components/drawer/design) |
| Modal decision or form | [Dialog](/solid/components/dialog/design) |
| Anchored compact content | [Popover](/solid/components/popover/design) |
| Persistent app regions | [App Shell](/solid/components/app-shell/design) |
