Toggle is a button that stays visually pressed or released to represent a single on/off or active/inactive option — familiar from formatting toolbars and inspector panels.

Prefer Toggle for tool-style activation in a bar of peers; prefer [Switch](/react/components/switch/design) for settings that read as system preferences. Prefer [Checkbox](/react/components/checkbox/design) for form fields collected on submit.

## Best practices

**Use an accessible pressed state.** Expose `aria-pressed` (or equivalent) and a name that describes the effect (“Bold”, “Mute”).

**Show pressed appearance clearly.** Do not rely on color alone — combine fill, icon weight, or border so state is obvious.

**Keep labels stable.** The label describes the mode or tool, not the current state (“Italic”, not “Unitalicize”).

**Disable when the action is unavailable.** Gray out and explain in a [Tooltip](/react/components/tooltip/design) only when the reason is non-obvious.

**Avoid toggles for one-shot actions.** Commands that run once belong on [Button](/react/components/button/design), not a latched toggle.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use toggles in editor or media toolbars where pressed state mirrors active formatting.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Replace a [Switch](/react/components/switch/design) in Settings with a toggle button — switches match the mental model for persistent preferences.</figcaption>
</figure>
</div>

## Groups

For related toggles, use [Toggle Group](/react/components/toggle-group/design) or [Button Group](/react/components/button-group/design) with consistent spacing and roving focus.

## Related patterns

| Need | Prefer |
| --- | --- |
| Pressed tool control | **Toggle** |
| Immediate setting | [Switch](/react/components/switch/design) |
| Form boolean | [Checkbox](/react/components/checkbox/design) |
| Icon state swap | [Swap](/react/components/swap/design) |
