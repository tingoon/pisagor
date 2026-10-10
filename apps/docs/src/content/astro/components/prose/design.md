Prose applies readable typography to long-form written content — articles, documentation, release notes, and rich HTML bodies. Headings, lists, links, and code blocks inherit consistent spacing and measure so text is comfortable to read.

Prefer Prose for static or markdown-driven content; prefer app UI components for interactive controls, forms, and dense dashboards. Keep semantic heading levels so structure stays navigable for assistive technology.

## Best practices

**Constrain line length.** Aim for a comfortable measure (roughly 60–75 characters) so paragraphs do not span the full viewport on large screens.

**Preserve semantic structure.** Use real heading levels, lists, and landmarks; do not rely on font size alone to imply hierarchy.

**Style links clearly.** Default link treatment should distinguish tappable text from body copy without breaking readability in long paragraphs.

**Separate prose from app chrome.** Wrap article bodies in Prose; place buttons, cards, and alerts outside the prose container so spacing stays predictable.

**Support dark mode and code.** Ensure inline and block code, blockquotes, and tables remain legible in both themes.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Render markdown or CMS HTML inside Prose and use components for actions beside the article.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Nest interactive form fields inside prose styles when Field and Input patterns already define spacing and errors.</figcaption>
</figure>
</div>

## Content

Lead sections with descriptive headings. Keep paragraphs short on web; use lists when steps or options are easier to scan than prose.

## Related patterns

| Need | Prefer |
| --- | --- |
| Long-form readable content | **Prose** |
| Rich authoring with toolbar | Rich Text Editor |
| Page frame and regions | App Shell |
| Inline code in UI | [Kbd](/astro/components/kbd/design) / default text styles |
