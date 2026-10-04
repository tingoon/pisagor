Format renders numbers, byte sizes, dates, and relative times using the viewer’s locale so values read naturally without manual string building. It keeps typography consistent while the underlying data stays in a neutral machine form.

Use Format anywhere a raw number or ISO timestamp would force people to translate units or time zones in their heads.

## Best practices

**Format at display time.** Keep canonical values in storage and apply locale rules in the UI so sorting and APIs stay stable.

**Pick the right granularity.** Show relative time for recency (“2 hours ago”) and absolute dates for schedules, audits, and legal records.

**Respect precision expectations.** Round file sizes and counts to human-scannable steps; avoid false precision on derived metrics.

**Expose full values when truncated.** Pair abbreviated numbers or dates with a tooltip or accessible name when the exact value matters for support or finance.

**Stay consistent within a view.** Use one date style and one number style per screen so columns and cards feel like the same product.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show “1.2 GB” and “Mar 4, 2026” using locale-aware formatting in tables and detail rows.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hard-code US date order or comma separators when the app serves multiple locales.</figcaption>
</figure>
</div>

## Content

Prefer plain language in labels beside formatted values (“Updated”, “Size”) rather than repeating format instructions in the UI. When a value is missing, show an em dash or explicit empty state instead of “Invalid date”.

## Related patterns

| Need | Prefer |
| --- | --- |
| Locale-aware value display | **Format** |
| Long-form readable articles | [Prose](/react/components/prose/design) |
| Compact metric tiles | [Stat](/react/components/stat/design) |
| Search hit emphasis | [Highlight](/react/components/highlight/design) |
