Toast delivers brief feedback after an action — saved, copied, failed — in a transient layer that dismisses on its own so people can keep working. It confirms outcomes without demanding a modal response.

Prefer Toast for non-blocking confirmation; prefer [Alert](/react/components/alert/design) when the message must stay beside related content until resolved. Prefer [Announcement](/react/components/announcement/design) for product news or promos people should notice in context, not fleeting chrome.

## Best practices

**Keep copy short.** One line for success; errors may add a short reason and optional action.

**Do not stack endlessly.** Limit concurrent toasts or queue them so the viewport stays usable.

**Offer undo or retry when valuable.** A toast action suits reversible operations; destructive undo needs clear labeling and a reasonable time window.

**Respect focus.** Toasts must not steal keyboard focus from the current task unless the message is critical and requires action.

**Time dismissal sensibly.** Longer copy or error toasts stay longer; success can be briefer. Pause dismissal on hover or focus when people need to read.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Confirm “Changes saved” with a toast while the user stays on the same screen.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Report validation errors for a form only via toast — place errors on the [Field](/react/components/field/design) and use [Alert](/react/components/alert/design) when persistence matters.</figcaption>
</figure>
</div>

## Placement

Anchor toasts away from primary navigation and safe areas on mobile. Consistent corner placement builds habit without covering the main canvas.

## Related patterns

| Need | Prefer |
| --- | --- |
| Brief auto-dismissing feedback | **Toast** |
| Persistent in-context message | [Alert](/react/components/alert/design) |
| Blocking decision | [Alert Dialog](/react/components/alert-dialog/design) |
| In-product callout | [Announcement](/react/components/announcement/design) |
