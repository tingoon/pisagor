Status communicates state with a small colored indicator — often a dot — so availability, health, or severity is visible at a glance beside a name or row.

Prefer Status when a compact, non-interactive signal is enough; prefer [Badge](/react/components/badge/design) for counted or labeled metadata people might filter on. Prefer [Alert](/react/components/alert/design) when the message needs explanation and a next step.

## Best practices

**Pair the dot with text.** Never rely on color alone; include a visible label or accessible name that states the status (Online, Failed, Draft).

**Use a small, consistent palette.** Map semantic colors to meaning across the product so green always means the same class of “good” in your system.

**Keep indicators subtle.** Status should support scanning, not shout over primary content — size and contrast should match table rows and list items.

**Update live when state changes.** Refresh the indicator when backend state changes so people trust what they see.

**Place status next to what it describes.** Put the dot on the entity it refers to — user, service, row — not floating in a distant column without context.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show “Away” or “Degraded” in text alongside the colored dot.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use red and green dots as the only legend for complex workflow states with more than two outcomes.</figcaption>
</figure>
</div>

## Motion and accessibility

Avoid pulsing dots except for truly active states (live, syncing). Respect reduced-motion preferences for any animation on the indicator.

## Related patterns

| Need | Prefer |
| --- | --- |
| Compact state indicator | **Status** |
| Named count or tag | [Badge](/react/components/badge/design) |
| Explained in-page message | [Alert](/react/components/alert/design) |
| Metric with trend | [Stat](/react/components/stat/design) |
