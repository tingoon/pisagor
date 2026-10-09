Provider wraps the application with shared Pisagor context — locale, icons, toasts, and other defaults — so components behave consistently without repeating setup in every screen.

Place Provider once near the root of your React tree. Nested providers are rare; prefer a single source of truth unless you intentionally isolate a subtree (for example, a Storybook story or embedded widget).

## Best practices

**Mount Provider before any Pisagor UI.** Toasts, formatted dates, and icon resolution expect context; rendering components outside Provider leads to missing behavior or fallbacks.

**Set locale to match content.** Align language and regional formatting with the copy people see, and update when the user changes language.

**Configure icons deliberately.** Register the icon set your product uses so buttons, alerts, and menus do not fall back to inconsistent glyphs.

**Keep side effects centralized.** Toast placement, z-index stacking, and motion defaults belong in Provider configuration, not scattered per page.

**Document app-level choices.** Theme, density, and default toast duration are product decisions — set them once and treat Provider as the contract for the design system.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Wrap the entire app (or each isolated demo root) with Provider before rendering Pisagor components.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Omit Provider and patch individual components with one-off props that duplicate global locale or toast behavior.</figcaption>
</figure>
</div>

## Testing

In tests and Storybook, wrap stories with the same Provider configuration production uses so snapshots match real behavior.

## Related patterns

| Need | Prefer |
| --- | --- |
| App-wide Pisagor context | **Provider** |
| Transient global messages | [Toast](/vue/components/toast/design) |
| Application layout shell | [App Shell](/vue/components/app-shell/design) |
| Localized numbers and dates | [Format](/vue/components/format/design) |
