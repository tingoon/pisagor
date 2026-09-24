import { AlertAction, AlertDescription, AlertRoot, AlertShorthand, AlertTitle } from "./alert";

export type { AlertProps } from "./alert";

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
