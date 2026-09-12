import AlertShorthand from "./alert.astro";
import AlertAction from "./alert-action.astro";
import AlertDescription from "./alert-description.astro";
import AlertRoot from "./alert-root.astro";
import AlertTitle from "./alert-title.astro";

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
