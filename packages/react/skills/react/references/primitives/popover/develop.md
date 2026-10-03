## Accessibility

Keyboard and focus behavior follow [Ark UI Popover](https://ark-ui.com/docs/components/popover#accessibility).

| Key | Description |
| --- | ----------- |
| Space | Opens or closes the popover. |
| Enter | Opens or closes the popover. |
| Tab | Moves focus to the next focusable element in the content. If none, moves to the next focusable after the trigger. |
| Shift + Tab | Moves focus to the previous focusable element in the content. If none, moves to the trigger. |
| Escape | Closes the popover and restores focus to the trigger. |

When `modal` is true, focus is trapped, outside pointer interaction is disabled, scrolling is blocked, and content behind the popover is hidden from assistive technologies.
