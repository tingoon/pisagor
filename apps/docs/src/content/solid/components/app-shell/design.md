App shell defines the durable frame of an application: banner, navigation, main workspace, and optional side rails or inspector panels. It keeps structure consistent while content inside regions changes.

Use app shell when the product is a multi-screen tool with persistent chrome; prefer [Surface](/solid/components/surface/design) or a simple column layout when the experience is a single scrolling page.

## Best practices

**Reserve regions for stable roles.** Header for wayfinding, main for primary work, side areas for navigation or tools — keep roles consistent across routes.

**Protect the main workspace.** Side panels and inspectors should not shrink readable content below usable widths; offer collapse or overlay on narrow viewports.

**Separate global from local nav.** App-wide destinations live in shell navigation; page-level actions belong in [Toolbar](/solid/components/toolbar/design) or content headers.

**Support resizable inspectors when useful.** Draggable panel edges help power users balance canvas and tools; persist widths when people customize layout.

**Layer announcements and alerts deliberately.** Stack banner, [Announcement](/solid/components/announcement/design), and page content so nothing essential hides under fixed chrome.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Keep navigation and main content stable while routes change inside the shell.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Wrap a marketing landing page in full app chrome with empty side rails.</figcaption>
</figure>
</div>

## Regions

Optional banner suits global messages; navigation rails suit deep hierarchies; inspector panels suit editors and detail-heavy tools. Not every region is required — omit rails when a single column is clearer.

## Related patterns

| Need | Prefer |
| --- | --- |
| Full application layout frame | **App Shell** |
| Desktop sidebar navigation | [Sidebar](/solid/components/sidebar/design) |
| Mobile primary destinations | [Bottom Navigation](/solid/components/bottom-navigation/design) |
| Top app bar | [Navbar](/solid/components/navbar/design) |
