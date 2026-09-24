import AlertShorthand from "./alert.svelte";
import AlertAction from "./alert-action.svelte";
import AlertDescription from "./alert-description.svelte";
import AlertRoot from "./alert-root.svelte";
import AlertTitle from "./alert-title.svelte";

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
