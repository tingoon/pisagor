Timer counts up or down through intervals so people track elapsed time, remaining time, or segmented periods — workouts, cooking, exam limits, or session timeouts.

Prefer Timer when the number itself is the focus; prefer [Progress](/react/components/progress/design) when showing completion toward a goal without second-by-second emphasis.

## Best practices

**State the mode.** Make clear whether time is counting up or down and what happens at zero — sound, message, or automatic action.

**Use legible numerals.** Tabular figures and consistent separators (01:30) aid scanning; avoid jitter from proportional fonts.

**Offer pause and reset when appropriate.** Interactive timers should not trap people; respect background tabs with Page Visibility when accuracy matters.

**Announce critical thresholds.** Screen readers benefit from live region updates at start, warning, and completion without spamming every second.

**Sync with server time for deadlines.** Client-only countdowns drift; anchor exam or payment windows to authoritative server time when stakes are high.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair a countdown with plain language (“3 minutes left”) for high-stress tasks.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Run a silent countdown to logout without warning and a way to extend the session.</figcaption>
</figure>
</div>

## Intervals

When breaking time into laps or rounds, label each segment and preserve history so people can review elapsed intervals.

## Related patterns

| Need | Prefer |
| --- | --- |
| Elapsed or remaining clock | **Timer** |
| Indeterminate wait | [Spinner](/react/components/spinner/design) |
| Fraction complete | [Progress](/react/components/progress/design) |
| Scheduled date display | [Format](/react/components/format/design) |
