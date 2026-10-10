Client Only renders children only after the browser has mounted, so server output stays stable when a feature depends on client APIs. Use it to avoid hydration mismatches without hiding entire routes from the server.

Prefer Client Only when a control reads `window`, media queries, or other browser-only state. Avoid wrapping whole pages when a small fallback or progressive enhancement is enough.

## Best practices

**Keep the server snapshot honest.** Anything rendered on the server should match what users see before hydration, or use a deliberate placeholder that does not imply data that only exists on the client.

**Offer a meaningful fallback.** When empty space would feel broken, show skeleton text, a disabled control, or static copy that explains what will appear once the client loads.

**Scope the boundary tightly.** Wrap the smallest subtree that needs client APIs so the rest of the page can still render on the server for performance and SEO.

**Defer heavy client bundles.** Pair Client Only with lazy loading when the client-only feature is large, so first paint stays fast.

**Respect reduced motion and preferences.** If client-only UI animates or reads motion preferences, initialize from the same fallback path so the transition does not flash incorrect states.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Wrap only the chart or map that needs `window`, and show a compact placeholder until mount.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Mark an entire dashboard Client Only when one widget needs browser APIs.</figcaption>
</figure>
</div>

## Fallback content

Match fallback dimensions and layout to the mounted control so the page does not jump when hydration completes. Prefer neutral placeholders over fake numbers or permissions the user does not yet have.

## Related patterns

| Need | Prefer |
| --- | --- |
| Browser-only subtree without SSR mismatch | **Client Only** |
| Hide until mounted with no SSR output | Client Only + Fallback |
| Full-page client app shell | App routing and layout patterns |
| Form controls that work on server and client | [Field](/vue/components/field/design) + standard inputs |
