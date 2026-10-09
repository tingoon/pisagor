Rating collects or displays a star-style score so people can judge quality at a glance or leave feedback after an experience. Interactive ratings invite input; read-only ratings summarize others’ opinions.

Prefer Rating for subjective scores on a bounded scale (often one to five). Use clear labels for endpoints when precision matters, and distinguish input mode from display-only summaries in reviews lists.

## Best practices

**Support keyboard and pointer equally.** Arrow keys, click, and hover preview (when collecting input) should align with the same value.

**Label the scale.** “Rate your experience” plus optional endpoint text (“Poor” / “Excellent”) reduces ambiguity.

**Allow clearing when input is optional.** Offer a way to reset stars so people are not forced into a default score.

**Show aggregates honestly.** Display averages with review count; a 5.0 from one review should not look identical to thousands of ratings.

**Do not rely on color alone.** Filled versus empty stars (or equivalent icons) should communicate value for everyone.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a labeled star control for product or support feedback with an optional comment field nearby.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force a rating before people can submit unrelated form data unless the score is truly required.</figcaption>
</figure>
</div>

## Display vs input

Read-only ratings belong in cards and list rows; interactive ratings belong in forms and post-action sheets. Match icon size to context — smaller in dense lists, larger when rating is the primary task.

## Related patterns

| Need | Prefer |
| --- | --- |
| Star score input or display | **Rating** |
| Single on/off preference | [Switch](/svelte/components/switch/design) |
| Pick one category | [Radio Group](/svelte/components/radio-group/design) |
| Compact sentiment | [Badge](/svelte/components/badge/design) |
