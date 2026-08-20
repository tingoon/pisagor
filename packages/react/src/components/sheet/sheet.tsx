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
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { Button } from "../button";
import {
  Dialog,
  type DialogBodyProps,
  type DialogDescriptionProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogOverlayProps,
  type DialogProps,
  type DialogTitleProps,
} from "../dialog";
import { useDialog } from "../dialog/dialog";

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

export type SheetCloseProps = ComponentProps<typeof DialogPrimitive.CloseTrigger>;
// #endregion

// #region Parts
export function SheetRoot(props: SheetProps) {
  return <Dialog {...props} />;
}
SheetRoot.displayName = "Sheet";

export function SheetTrigger(props: SheetTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}
SheetTrigger.displayName = "Sheet.Trigger";

export function SheetOverlay(props: DialogOverlayProps) {
  return <Dialog.Overlay {...props} />;
}
SheetOverlay.displayName = "Sheet.Overlay";

export function SheetPositioner({
  variant = "default",
  placement,
  className,
  ...rest
}: SheetPositionerProps) {
  return (
    <DialogPrimitive.Positioner
      {...rest}
      className={cn(sheetPositionerVariants({ placement, variant }), className)}
    />
  );
}
SheetPositioner.displayName = "Sheet.Positioner";

export function SheetContent({
  showCloseButton = true,
  placement = "right",
  variant = "default",
  className,
  children,
  ...rest
}: SheetContentProps) {
  const { testId } = useDialog();

  return (
    <Portal>
      <SheetOverlay />

      <SheetPositioner placement={placement} variant={variant}>
        <DialogPrimitive.Content
          {...rest}
          className={cn(sheetContentVariants({ placement, variant }), className)}
          data-testid={testId}
        >
          {children}

          {!!showCloseButton && (
            <SheetClose asChild>
              <Button
                aria-label="Close"
                className={sheetInlineVariants()}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </SheetClose>
          )}
        </DialogPrimitive.Content>
      </SheetPositioner>
    </Portal>
  );
}
SheetContent.displayName = "Sheet.Content";

export function SheetHeader(props: DialogHeaderProps) {
  return <Dialog.Header dataPart="header" dataScope="sheet" {...props} />;
}
SheetHeader.displayName = "Sheet.Header";

export function SheetTitle(props: DialogTitleProps) {
  return <Dialog.Title {...props} />;
}
SheetTitle.displayName = "Sheet.Title";

export function SheetDescription(props: DialogDescriptionProps) {
  return <Dialog.Description {...props} />;
}
SheetDescription.displayName = "Sheet.Description";

export function SheetBody({ className, ...rest }: DialogBodyProps) {
  return (
    <Dialog.Body
      {...rest}
      className={cn(sheetBodyVariants(), className)}
      dataPart="body"
      dataScope="sheet"
    />
  );
}
SheetBody.displayName = "Sheet.Body";

export function SheetClose(props: SheetCloseProps) {
  return <DialogPrimitive.CloseTrigger {...props} />;
}
SheetClose.displayName = "Sheet.Close";

export function SheetFooter({ className, ...rest }: DialogFooterProps) {
  return (
    <Dialog.Footer
      {...rest}
      className={cn(sheetFooterVariants(), className)}
      dataPart="footer"
      dataScope="sheet"
    />
  );
}
SheetFooter.displayName = "Sheet.Footer";
// #endregion
