An avatar shows who a person is — usually a photo, or initials or an icon when no image is available. It gives faces and identity a consistent footprint in lists, headers, and threads.

Prefer a single avatar for one actor; use avatar grouping patterns when several people share a row and space is tight.

## Best practices

**Provide a reliable fallback.** Initials or a neutral icon should appear when the image fails or is missing, not an empty circle.

**Size for context.** Smaller avatars in dense lists; larger in profile headers — keep stroke and corner radius consistent with nearby [Badge](/astro/components/badge/design) and text.

**Never rely on image alone.** Expose an accessible name on the avatar or its linked label so screen readers know who it represents.

**Respect privacy.** Do not show profile photos where the product policy treats identity as sensitive; use initials or a generic glyph instead.

**Keep photos crisp.** Serve appropriately sized sources so circles stay sharp on high-density displays.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair the avatar with a visible name or link when identity matters for the task.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use decorative avatars with no name for accounts people must distinguish in support or admin flows.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Single person identity | **Avatar** |
| Compact status on identity | [Badge](/astro/components/badge/design) |
| List row with person and metadata | [Item](/astro/components/item/design) |
| Account menu trigger | Menu |
