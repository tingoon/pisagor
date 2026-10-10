Skip Nav lets keyboard and assistive technology users bypass repetitive navigation and jump straight to the main content. It is the first meaningful stop in the tab order on pages with heavy chrome.

Place Skip Nav at the top of the document, visually hidden until focused, linking to the main content landmark. The target must be focusable or tabindex-managed so activation moves reading focus, not only scroll position.

## Best practices

**Make it the first focusable control.** Global headers, banners, and nav should not precede skip link in tab order.

**Link to real main content.** Target `#main` or equivalent landmark that wraps primary page purpose, not a generic wrapper.

**Show on focus only.** Visible skip link on keyboard focus satisfies sighted keyboard users without cluttering mouse layouts.

**Keep label action-oriented.** “Skip to main content” is clearer than “Skip navigation” alone when multiple nav regions exist.

**Test with screen readers.** Activating the link should announce and move to content without trapping focus in hidden chrome.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Provide one skip link to the primary main landmark on every document-style page with global nav.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Omit skip nav on data-heavy apps with long sidebars — keyboard users still traverse the same chrome repeatedly.</figcaption>
</figure>
</div>

## Single-page apps

Re-render skip nav once per route change if focus management resets; ensure the main landmark persists across client navigations.

## Related patterns

| Need | Prefer |
| --- | --- |
| Bypass repetitive nav | **Skip Nav** |
| Hide decorative text | [Visually Hidden](/astro/components/visually-hidden/design) |
| App landmarks | App Shell |
| In-page section jumps | Scrollspy |
