Skeleton shows placeholder shapes that pulse while content loads so layouts feel stable instead of jumping when data arrives. It communicates “content will appear here” better than a blank gap or a lone spinner in a rich layout.

Prefer Skeleton when structure is known ahead of time — cards, avatars, table rows. Prefer [Spinner](/svelte/components/spinner/design) for indeterminate waits in buttons or small inline slots. Prefer [Progress](/svelte/components/progress/design) when completion percentage matters.

## Best practices

**Mirror final layout.** Skeleton blocks should match real typography, image, and row geometry so the transition feels like a reveal, not a reflow.

**Limit duration.** Replace skeletons as soon as data is ready; prolonged shimmer feels broken.

**Avoid skeleton for instant cache hits.** Show cached content immediately; skeleton only when network or compute delay is perceptible.

**Respect reduced motion.** Use static placeholders or subtle opacity when animation is reduced.

**Do not block entire apps.** Skeleton localized to the card or list that is loading keeps the shell usable.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Place skeleton rows in a table or card list that match the eventual content shape.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Show a full-page skeleton for a quick refetch when inline data already exists and can stay visible.</figcaption>
</figure>
</div>

## Errors

When loading fails, replace skeleton with an error state and retry — do not pulse placeholders indefinitely.

## Related patterns

| Need | Prefer |
| --- | --- |
| Layout-stable loading placeholders | **Skeleton** |
| Inline indeterminate wait | [Spinner](/svelte/components/spinner/design) |
| Measurable long task | [Progress](/svelte/components/progress/design) |
| Empty loaded state | [Empty State](/svelte/components/empty-state/design) |
