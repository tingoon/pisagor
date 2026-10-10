Frame embeds external or isolated content inside consistent chrome—a bordered viewport with optional title and actions—so previews, demos, and third-party surfaces match the rest of the product.

Prefer Frame when the embedded region needs a visible boundary and loading state; prefer [Aspect Ratio](/solid/components/aspect-ratio/design) alone when you only need proportional sizing without chrome.

## Best practices

**Label what is inside.** Use a title or caption that names the source (documentation, live preview, partner widget) so people know what they are viewing.

**Handle loading and failure gracefully.** Show a skeleton or message while content loads; offer Retry when the embed fails instead of an empty box.

**Respect sandbox and security.** Embed only trusted origins, and avoid mixing sensitive app chrome with untrusted scripts without isolation.

**Size for the content’s role.** Give demos room to breathe; keep incidental embeds compact so they support—not dominate—the page.

**Keep actions adjacent to the frame.** Place Open in new tab, Refresh, or Copy link on the frame header so controls map to the viewport they affect.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Wrap a live component demo in a titled frame with a clear loading state.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Drop a full-width iframe without context, title, or an escape when the embed breaks.</figcaption>
</figure>
</div>

## Layout

Match corner radius and border weight to neighboring [Card](/solid/components/card/design) surfaces. On narrow screens, allow the frame to scroll internally rather than forcing the whole page to widen.

## Related patterns

| Need | Prefer |
| --- | --- |
| Embedded viewport with chrome | **Frame** |
| Proportional media box | [Aspect Ratio](/solid/components/aspect-ratio/design) |
| Grouped static content | [Card](/solid/components/card/design) |
| Full app layout regions | [App Shell](/solid/components/app-shell/design) |
