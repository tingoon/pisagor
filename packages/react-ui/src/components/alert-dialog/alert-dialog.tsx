import { Portal } from "@ark-ui/react/portal";
import type { ReactNode } from "react";
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

export interface AlertDialogProps extends Omit<AlertDialogRootProps, "children" | "title"> {
  /** Header title content. */
  title?: ReactNode;
  /** Header description content. */
  description?: ReactNode;
  /** Footer actions (typically Cancel / Action). */
  actions?: ReactNode;
  /** Control that opens the dialog. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
export function AlertDialogRoot({ children, ...rest }: AlertDialogRootProps) {
  return (
    <Dialog.Root {...rest} role="alertdialog">
      {children}
    </Dialog.Root>
  );
}

export function AlertDialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}

export function AlertDialogContent({
  bottomStickOnMobile = true,
  children,
  ...rest
}: DialogContentProps) {
  return (
    <Portal>
      <Dialog.Backdrop />

      <Dialog.Positioner bottomStickOnMobile={bottomStickOnMobile}>
        <Dialog.Content {...rest} bottomStickOnMobile={bottomStickOnMobile} showCloseButton={false}>
          {children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
}

export function AlertDialogBody({ className, ...rest }: DialogBodyProps) {
  const { slots } = useDialog();

  return (
    <Dialog.Body
      {...rest}
      className={slots.alertBody({ className })}
      data-part="body"
      data-scope="alert-dialog"
    />
  );
}

export function AlertDialogHeader(props: DialogHeaderProps) {
  return <Dialog.Header data-part="header" data-scope="alert-dialog" {...props} />;
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
  return <Dialog.Footer data-part="footer" data-scope="alert-dialog" {...props} />;
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

// #region Shorthand
export function AlertDialogShorthand({
  actions,
  description,
  title,
  trigger,
  ...rest
}: AlertDialogProps) {
  return (
    <AlertDialogRoot {...rest}>
      {trigger !== undefined && <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>}

      <AlertDialogContent>
        {(title !== undefined || description !== undefined) && (
          <AlertDialogHeader>
            {title !== undefined && <AlertDialogTitle>{title}</AlertDialogTitle>}

            {description !== undefined && (
              <AlertDialogDescription>{description}</AlertDialogDescription>
            )}
          </AlertDialogHeader>
        )}

        {actions !== undefined && <AlertDialogFooter>{actions}</AlertDialogFooter>}
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
// #endregion

// #region Display Names
AlertDialogRoot.displayName = "AlertDialog.Root";
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
AlertDialogShorthand.displayName = "AlertDialog";
// #endregion
