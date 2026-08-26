import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import {
  type SheetContentVariantProps,
  type SheetPositionerVariantProps,
  sheetBodyVariants,
  sheetContentVariants,
  sheetFooterVariants,
  sheetInlineVariants,
  sheetPositionerVariants,
} from "@pisagor/styles/ui/sheet";
import type { ComponentProps } from "react";
import { Button } from "../button";
import {
  Dialog,
  type DialogBackdropProps,
  type DialogBodyProps,
  type DialogDescriptionProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogProps,
  type DialogTitleProps,
} from "../dialog";

// #region Types
export interface SheetPositionerProps
  extends ComponentProps<typeof DialogPrimitive.Positioner>,
    SheetPositionerVariantProps {}

export interface SheetContentProps
  extends ComponentProps<typeof DialogPrimitive.Content>,
    SheetContentVariantProps {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export type SheetProps = DialogProps;

export type SheetTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;

export type SheetCloseTriggerProps = ComponentProps<typeof DialogPrimitive.CloseTrigger>;
// #endregion

// #region Parts
export function SheetRoot(props: SheetProps) {
  return <Dialog {...props} />;
}

export function SheetTrigger(props: SheetTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function SheetBackdrop(props: DialogBackdropProps) {
  return <Dialog.Backdrop {...props} />;
}

export function SheetPositioner({
  variant = "default",
  placement,
  className,
  ...rest
}: SheetPositionerProps) {
  return (
    <DialogPrimitive.Positioner
      {...rest}
      className={sheetPositionerVariants({ className, placement, variant })}
    />
  );
}

export function SheetContent({
  showCloseButton = true,
  placement = "right",
  variant = "default",
  className,
  children,
  ...rest
}: SheetContentProps) {
  return (
    <Portal>
      <SheetBackdrop />

      <SheetPositioner placement={placement} variant={variant}>
        <DialogPrimitive.Content
          {...rest}
          className={sheetContentVariants({ className, placement, variant })}
        >
          {children}

          {!!showCloseButton && (
            <SheetCloseTrigger asChild>
              <Button
                aria-label="Close"
                className={sheetInlineVariants()}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </SheetCloseTrigger>
          )}
        </DialogPrimitive.Content>
      </SheetPositioner>
    </Portal>
  );
}

export function SheetHeader(props: DialogHeaderProps) {
  return <Dialog.Header dataPart="header" dataScope="sheet" {...props} />;
}

export function SheetTitle(props: DialogTitleProps) {
  return <Dialog.Title {...props} />;
}

export function SheetDescription(props: DialogDescriptionProps) {
  return <Dialog.Description {...props} />;
}

export function SheetBody({ className, ...rest }: DialogBodyProps) {
  return (
    <Dialog.Body
      {...rest}
      className={sheetBodyVariants({ className })}
      dataPart="body"
      dataScope="sheet"
    />
  );
}

export function SheetCloseTrigger(props: SheetCloseTriggerProps) {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function SheetFooter({ className, ...rest }: DialogFooterProps) {
  return (
    <Dialog.Footer
      {...rest}
      className={sheetFooterVariants({ className })}
      dataPart="footer"
      dataScope="sheet"
    />
  );
}
// #endregion

// #region Display Names
SheetRoot.displayName = "Sheet";
SheetTrigger.displayName = "Sheet.Trigger";
SheetBackdrop.displayName = "Sheet.Backdrop";
SheetPositioner.displayName = "Sheet.Positioner";
SheetContent.displayName = "Sheet.Content";
SheetHeader.displayName = "Sheet.Header";
SheetTitle.displayName = "Sheet.Title";
SheetDescription.displayName = "Sheet.Description";
SheetBody.displayName = "Sheet.Body";
SheetCloseTrigger.displayName = "Sheet.CloseTrigger";
SheetFooter.displayName = "Sheet.Footer";
// #endregion
