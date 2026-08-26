import { Button, type ButtonProps } from "../button";
import {
  Dialog,
  type DialogBodyProps,
  type DialogCloseTriggerProps,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogRootProps,
  type DialogTitleProps,
  type DialogTriggerProps,
} from "../dialog";
import { useDialog } from "../dialog/dialog.context";

// #region Types
export interface AlertDialogRootProps extends DialogRootProps {}

export interface AlertDialogActionProps
  extends DialogCloseTriggerProps,
    Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @defaultValue "default"
   */
  variant?: "default" | "destructive";
}

export interface AlertDialogCancelProps
  extends DialogCloseTriggerProps,
    Omit<ButtonProps, "variant"> {}
// #endregion

// #region Parts
export function AlertDialogRoot({ children, ...rest }: AlertDialogRootProps) {
  return (
    <Dialog {...rest} role="alertdialog">
      {children}
    </Dialog>
  );
}

export function AlertDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}

export function AlertDialogContent(props: DialogContentProps) {
  return <Dialog.Content showCloseButton={false} {...props} />;
}

export function AlertDialogBody({ className, ...rest }: DialogBodyProps) {
  const { slots } = useDialog();

  return (
    <Dialog.Body
      {...rest}
      className={slots.alertBody({ className })}
      dataPart="body"
      dataScope="alert-dialog"
    />
  );
}

export function AlertDialogHeader(props: DialogHeaderProps) {
  return <Dialog.Header dataPart="header" dataScope="alert-dialog" {...props} />;
}

export function AlertDialogTitle(props: DialogTitleProps) {
  return <Dialog.Title {...props} />;
}

export function AlertDialogDescription(props: DialogDescriptionProps) {
  return <Dialog.Description {...props} />;
}

export function AlertDialogCloseTrigger(props: DialogCloseTriggerProps) {
  return <Dialog.CloseTrigger {...props} />;
}

export function AlertDialogFooter(props: DialogFooterProps) {
  return <Dialog.Footer dataPart="footer" dataScope="alert-dialog" {...props} />;
}

export function AlertDialogAction({ variant = "default", ...rest }: AlertDialogActionProps) {
  return <Button {...rest} variant={variant} />;
}

export function AlertDialogCancel(props: AlertDialogCancelProps) {
  return (
    <AlertDialogCloseTrigger asChild>
      <Button variant="outline" {...props} />
    </AlertDialogCloseTrigger>
  );
}
// #endregion

// #region Display Names
AlertDialogRoot.displayName = "AlertDialog";
AlertDialogTrigger.displayName = "AlertDialog.Trigger";
AlertDialogContent.displayName = "AlertDialog.Content";
AlertDialogBody.displayName = "AlertDialog.Body";
AlertDialogHeader.displayName = "AlertDialog.Header";
AlertDialogTitle.displayName = "AlertDialog.Title";
AlertDialogDescription.displayName = "AlertDialog.Description";
AlertDialogCloseTrigger.displayName = "AlertDialog.CloseTrigger";
AlertDialogFooter.displayName = "AlertDialog.Footer";
AlertDialogAction.displayName = "AlertDialog.Action";
AlertDialogCancel.displayName = "AlertDialog.Cancel";
// #endregion
