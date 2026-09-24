import AlertDialogShorthand from "./alert-dialog.svelte";
import AlertDialogAction from "./alert-dialog-action.svelte";
import AlertDialogBody from "./alert-dialog-body.svelte";
import AlertDialogCancel from "./alert-dialog-cancel.svelte";
import AlertDialogCloseTrigger from "./alert-dialog-close-trigger.svelte";
import AlertDialogContent from "./alert-dialog-content.svelte";
import AlertDialogDescription from "./alert-dialog-description.svelte";
import AlertDialogFooter from "./alert-dialog-footer.svelte";
import AlertDialogHeader from "./alert-dialog-header.svelte";
import AlertDialogRoot from "./alert-dialog-root.svelte";
import AlertDialogTitle from "./alert-dialog-title.svelte";
import AlertDialogTrigger from "./alert-dialog-trigger.svelte";

export const AlertDialog = Object.assign(AlertDialogShorthand, {
  Action: AlertDialogAction,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  CloseTrigger: AlertDialogCloseTrigger,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
