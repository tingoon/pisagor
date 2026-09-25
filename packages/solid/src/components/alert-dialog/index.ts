import {
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogCloseTrigger,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogRoot,
  AlertDialogShorthand,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

export type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogProps,
  AlertDialogRootProps,
} from "./alert-dialog";

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
