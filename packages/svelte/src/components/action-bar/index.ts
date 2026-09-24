import ActionBarBody from "./action-bar-body.svelte";
import ActionBarClose from "./action-bar-close.svelte";
import ActionBarContent from "./action-bar-content.svelte";
import ActionBarRoot from "./action-bar-root.svelte";
import ActionBarSeparator from "./action-bar-separator.svelte";
import ActionBarTrigger from "./action-bar-trigger.svelte";
import ActionBarValue from "./action-bar-value.svelte";

export const ActionBar = Object.assign(ActionBarRoot, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
