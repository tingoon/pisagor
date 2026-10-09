Segment Group switches between a few related views, filters, or modes with a compact segmented control that shows the active choice at a glance. It behaves like a visible, button-shaped single selection.

Prefer Segment Group for two to five mutually exclusive modes that people switch often — chart ranges, map layers, list versus grid. Prefer [Radio Group](/solid/components/radio-group/design) when longer labels or more options need vertical space. Prefer [Toggle Group](/solid/components/toggle-group/design) when multiple segments can be on at once or when choices are independent filters.

## Best practices

**Keep labels short.** Segments use horizontal space; one or two words per option scans best.

**Make selection obvious.** Active segment uses fill, weight, or contrast distinct from idle segments — not color alone.

**Avoid more than a handful of segments.** Overflow into a [Select](/solid/components/select/design) or menu when options grow.

**Do not nest destructive actions.** Segments switch context; primary actions belong outside the control.

**Sync with content state.** Changing segment should update the view immediately or show loading inline — avoid silent failure.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use segments for frequent view toggles like Day / Week / Month with instant feedback in the content area.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Replace a long policy radio list with cramped segments that truncate critical option text.</figcaption>
</figure>
</div>

## vs tabs

Tabs often imply separate panels with their own URLs or lazy content; segments usually filter or restyle the same surface. Choose tabs when navigation between major sections matters; choose segments for lightweight mode switches.

## Related patterns

| Need | Prefer |
| --- | --- |
| Compact single-choice modes | **Segment Group** |
| Visible list of options | [Radio Group](/solid/components/radio-group/design) |
| Multiple independent filters | [Toggle Group](/solid/components/toggle-group/design) |
| Major section navigation | [Tabs](/solid/components/tabs/design) |
