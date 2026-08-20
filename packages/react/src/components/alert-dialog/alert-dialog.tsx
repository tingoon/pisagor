import { alertDialogBodyVariants } from "@pisagor/styles/ui/alert-dialog";
import { Button, type ButtonProps } from "../button";
import {
  Dialog,
  type DialogBodyProps,
  type DialogCloseProps,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogRootProps,
  type DialogTitleProps,
  type DialogTriggerProps,
} from "../dialog";

// #region Types
export interface AlertDialogRootProps extends DialogRootProps {}

export interface AlertDialogActionProps extends DialogCloseProps, Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @defaultValue "default"
   */
  variant?: "default" | "destructive";
}

export interface AlertDialogCancelProps extends DialogCloseProps, Omit<ButtonProps, "variant"> {}
// #endregion

// #region Parts
export function AlertDialogRoot({ children, ...rest }: AlertDialogRootProps) {
  return (
    <Dialog {...rest} role="alertdialog">
      {children}
    </Dialog>
  );
}
AlertDialogRoot.displayName = "AlertDialog";

export function AlertDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}
AlertDialogTrigger.displayName = "AlertDialog.Trigger";

export function AlertDialogContent(props: DialogContentProps) {
  return <Dialog.Content showCloseButton={false} {...props} />;
}
AlertDialogContent.displayName = "AlertDialog.Content";

export function AlertDialogBody({ className, ...rest }: DialogBodyProps) {
  return (
    <Dialog.Body
      {...rest}
      className={alertDialogBodyVariants({ className })}
      dataPart="body"
      dataScope="alert-dialog"
    />
  );
}
AlertDialogBody.displayName = "AlertDialog.Body";

export function AlertDialogHeader(props: DialogHeaderProps) {
  return <Dialog.Header dataPart="header" dataScope="alert-dialog" {...props} />;
}
AlertDialogHeader.displayName = "AlertDialog.Header";

export function AlertDialogTitle(props: DialogTitleProps) {
  return <Dialog.Title {...props} />;
}
AlertDialogTitle.displayName = "AlertDialog.Title";

export function AlertDialogDescription(props: DialogDescriptionProps) {
  return <Dialog.Description {...props} />;
}
AlertDialogDescription.displayName = "AlertDialog.Description";

export function AlertDialogClose(props: DialogCloseProps) {
  return <Dialog.Close {...props} />;
}
AlertDialogClose.displayName = "AlertDialog.Close";

export function AlertDialogFooter(props: DialogFooterProps) {
  return <Dialog.Footer dataPart="footer" dataScope="alert-dialog" {...props} />;
}
AlertDialogFooter.displayName = "AlertDialog.Footer";

export function AlertDialogAction({ variant = "default", ...rest }: AlertDialogActionProps) {
  return <Button {...rest} variant={variant} />;
}
AlertDialogAction.displayName = "AlertDialog.Action";

export function AlertDialogCancel(props: AlertDialogCancelProps) {
  return (
    <AlertDialogClose asChild>
      <Button variant="outline" {...props} />
    </AlertDialogClose>
  );
}
AlertDialogCancel.displayName = "AlertDialog.Cancel";
// #endregion
