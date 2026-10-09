An alert presents a brief in-page message about success, warning, information, or error. It stays visible next to related content until the issue is resolved or the person dismisses it.

Prefer Alert when the message must remain in context; prefer [Toast](/svelte/components/toast/design) for transient feedback that does not need to anchor to a section. Prefer [Alert Dialog](/svelte/components/alert-dialog/design) when continuing requires an explicit decision.

## Best practices

**Match tone to severity.** Use semantic variants so color and icon reinforce meaning without relying on color alone.

**Lead with the outcome.** State what happened or what to do next in the first line; keep supporting detail short.

**Offer a clear next step.** Include an action when recovery is obvious — Retry, View details, or Fix settings — and avoid burying the only path in body copy.

**Keep alerts local.** Place the alert beside the content it describes so people connect cause and remedy.

**Dismiss when stale.** Remove or hide alerts after the condition clears so the interface returns to a calm resting state.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Place one focused alert near the form or region it refers to, with a concrete next step.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Stack many alerts at the top of the page where none clearly owns the problem.</figcaption>
</figure>
</div>

## Content

Use titles for scanning and body text for nuance. Success messages can be shorter; errors should name what failed and how to fix it. Avoid marketing language in system alerts.

## Related patterns

| Need | Prefer |
| --- | --- |
| Persistent in-context message | **Alert** |
| Brief auto-dismissing feedback | [Toast](/svelte/components/toast/design) |
| Blocking confirmation | [Alert Dialog](/svelte/components/alert-dialog/design) |
| Compact metadata label | [Badge](/svelte/components/badge/design) |
| Product or promo callout | [Announcement](/svelte/components/announcement/design) |
