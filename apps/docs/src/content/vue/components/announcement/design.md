An announcement draws attention to a short product, marketing, or changelog message without blocking the rest of the page. It sits above or beside primary content so people can notice news and keep working.

Prefer Announcement for promos and updates; prefer [Alert](/vue/components/alert/design) when the message is system status, error, or action-required.

## Best practices

**Keep copy brief.** One line plus an optional link beats a paragraph; detail belongs on the destination page.

**Make dismissal respectful.** Allow dismiss when the message is optional, and remember dismissal for a reasonable period so it does not reappear every visit.

**Use tone that fits marketing.** Lighter visual weight than error alerts; avoid alarm colors for neutral news.

**Limit competing banners.** One announcement at a time prevents header fatigue; rotate or prioritize when several messages qualify.

**Link with purpose.** Use a short call to action — Learn more, See what’s new — instead of making the entire bar a vague click target.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> State the benefit or news in one sentence and offer a single optional action.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use an announcement for errors, security warnings, or required acknowledgments.</figcaption>
</figure>
</div>

## Placement

Place announcements in predictable chrome — top of [App Shell](/vue/components/app-shell/design) or below global navigation — so they do not cover primary task controls. On narrow viewports, wrap text before truncating critical words.

## Related patterns

| Need | Prefer |
| --- | --- |
| Promo or product news | **Announcement** |
| System or form status | [Alert](/vue/components/alert/design) |
| Timed transient notice | [Toast](/vue/components/toast/design) |
| App-wide top chrome | [App Shell](/vue/components/app-shell/design) |
