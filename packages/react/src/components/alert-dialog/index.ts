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
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

export type {
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogRootProps,
} from "./alert-dialog";

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Action: AlertDialogAction,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  CloseTrigger: AlertDialogCloseTrigger,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
