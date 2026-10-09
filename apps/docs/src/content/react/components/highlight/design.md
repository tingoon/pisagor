Highlight emphasizes matching substrings inside text so search results, filters, and in-page find feel scannable. It draws the eye to the overlap between the query and the content without rewriting the whole string.

Use Highlight inside result lists, tables, and autocomplete rows; pair it with [Format](/react/components/format/design) when values are numeric or temporal, not lexical.

## Best practices

**Highlight only meaningful matches.** Tie emphasis to the active query or filter term, and clear highlights when the query changes.

**Preserve readable contrast.** Choose a background or weight shift that stays legible in light and dark themes and meets contrast requirements.

**Keep surrounding text stable.** Avoid reflowing layout when highlights appear; emphasize in place so line breaks do not jump.

**Support case and diacritics thoughtfully.** Match user expectations for case-insensitive search, and document when accents are ignored.

**Do not rely on color alone.** Combine background, weight, or underline so color-blind users still spot matches.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Bold or tint the letters that match the search string inside each result title.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Highlight entire rows or unrelated words when only one term matched.</figcaption>
</figure>
</div>

## Content

When no substring matches, show the plain text without decorative emphasis. For empty queries, skip Highlight entirely.

## Related patterns

| Need | Prefer |
| --- | --- |
| Query match emphasis in text | **Highlight** |
| Type-to-filter option lists | [Autocomplete](/react/components/autocomplete/design) |
| Command palette search | [Command](/react/components/command/design) |
| Scroll-spy section labels | [Scrollspy](/react/components/scrollspy/design) |
