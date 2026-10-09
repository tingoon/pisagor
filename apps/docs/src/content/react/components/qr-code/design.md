QR Code renders a scannable matrix so people can open a link, join a network, or share structured data with a phone camera. It bridges desktop or print surfaces to mobile actions without typing long URLs.

Prefer QR Code when the payload is stable and scanning is the primary handoff; prefer a plain link or [Button](/react/components/button/design) when the audience is already on the correct device.

## Best practices

**Size for reliable scanning.** Keep modules large enough at arm’s length; add quiet zone padding so cameras can lock onto the code.

**Pair with a human-readable fallback.** Show the URL, network name, or short instructions beside the code for people who cannot scan.

**Use high contrast.** Dark modules on a light background (or the inverse in dark UI) scan more reliably than low-contrast decorative colors.

**Refresh when the payload changes.** Replace the code when links expire or credentials rotate; stale codes erode trust.

**Explain what happens after scan.** A line of copy (“Scan to pay” or “Opens signup on your phone”) sets expectation before the camera opens.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show the code at a comfortable size with quiet zone, contrast, and a short label describing the action.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Shrink a QR code into a dense toolbar where cameras struggle and no text alternative exists.</figcaption>
</figure>
</div>

## Accessibility

QR codes are inherently visual. Always provide an equivalent action — copy link, open on this device, or email — for people who do not use a camera.

## Related patterns

| Need | Prefer |
| --- | --- |
| Camera handoff to mobile | **QR Code** |
| Open URL on this device | [Link Box](/react/components/link-box/design) / [Button](/react/components/button/design) |
| Share sheet actions | [Dropdown Menu](/react/components/dropdown-menu/design) |
| Copy payload | [Clipboard](/react/components/clipboard/design) |
