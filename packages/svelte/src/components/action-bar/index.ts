import ActionBarShorthand from "./action-bar.svelte";
import ActionBarBody from "./action-bar-body.svelte";
import ActionBarClose from "./action-bar-close.svelte";
import ActionBarContent from "./action-bar-content.svelte";
import ActionBarPositioner from "./action-bar-positioner.svelte";
import ActionBarRoot from "./action-bar-root.svelte";
import ActionBarSeparator from "./action-bar-separator.svelte";
import ActionBarTrigger from "./action-bar-trigger.svelte";
import ActionBarValue from "./action-bar-value.svelte";

export const ActionBar = Object.assign(ActionBarShorthand, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Positioner: ActionBarPositioner,
  Root: ActionBarRoot,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
