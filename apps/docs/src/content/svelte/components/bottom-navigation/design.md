Bottom navigation gives mobile users quick access to main app sections from a bar fixed to the bottom of the screen. Primary destinations stay within thumb reach for one-handed use.

Prefer bottom navigation on phones for three to five top-level sections; prefer [Navbar](/svelte/components/navbar/design) or [Sidebar](/svelte/components/sidebar/design) when horizontal space supports richer wayfinding.

## Best practices

**Limit destinations.** Three to five items cover primary areas; rare sections belong in [Menu](/svelte/components/menu/design) or profile overflow.

**Label every item.** Icons alone fail when metaphors differ by culture; short text labels aid recognition and accessibility.

**Show where you are.** Highlight the active section so people always know which root area they occupy.

**Avoid nested tasks in the bar.** Do not put transient actions, filters, or bulk commands in bottom navigation — use [Toolbar](/svelte/components/toolbar/design) or [Action Bar](/svelte/components/action-bar/design) in content.

**Respect safe areas.** Pad above home indicators so targets stay tappable on modern phones.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Map each tab to a distinct root view with a clear active state.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Cram seven destinations or secondary settings into the bottom bar.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Mobile primary sections | **Bottom Navigation** |
| Desktop vertical hierarchy | [Sidebar](/svelte/components/sidebar/design) |
| Top global chrome | [Navbar](/svelte/components/navbar/design) |
| Full layout frame | [App Shell](/svelte/components/app-shell/design) |
