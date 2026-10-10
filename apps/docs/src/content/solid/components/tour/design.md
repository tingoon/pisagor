Tour walks people through key parts of the interface step by step — spotlighting targets, explaining purpose, and offering Next or Skip — so first-time or post-update users build a mental map quickly.

Prefer Tour for optional onboarding people can dismiss; prefer [Dialog](/solid/components/dialog/design) or inline [Empty State](/solid/components/empty-state/design) when one screen needs deep setup before anything else works.

## Best practices

**Keep tours short.** Highlight a handful of high-value areas; link to docs for depth instead of turning the product into a slideshow.

**Let people skip and resume.** Respect “Not now” and do not trap focus; remember completion so veterans are not nagged.

**Anchor steps to real targets.** Spotlight actual controls and scroll them into view; avoid pointing at empty space after layout shifts.

**Write for action.** Each step says what someone can do here, not marketing copy about the feature’s greatness.

**Test on small viewports.** Popovers must not cover the element they describe; reposition or switch to centered cards when space is tight.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Offer a tour from Help or first visit with clear progress (“2 of 5”).</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Block login or payment behind a mandatory multi-step tour with no skip.</figcaption>
</figure>
</div>

## Accessibility

Manage focus in the step container, return focus to the trigger on exit, and ensure screen readers hear step content even when visual spotlight is used.

## Related patterns

| Need | Prefer |
| --- | --- |
| Guided first-run highlights | **Tour** |
| Linear task completion | [Steps](/solid/components/steps/design) |
| Empty starting view | [Empty State](/solid/components/empty-state/design) |
| Contextual short hint | [Tooltip](/solid/components/tooltip/design) |
