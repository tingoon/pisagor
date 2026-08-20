import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import {
  type DialogContentVariantProps,
  dialogBodyVariants,
  dialogContentVariants,
  dialogDescriptionVariants,
  dialogFooterVariants,
  dialogHeaderVariants,
  dialogInlineVariants,
  dialogOverlayVariants,
  dialogPositionerVariants,
  dialogTitleVariants,
} from "@pisagor/styles/ui/dialog";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { DialogContext, useDialog } from "./dialog.context";

// #region Types
export interface DialogContentProps
  extends ComponentProps<typeof DialogPrimitive.Content>,
    DialogContentVariantProps {
  /**
   * Whether to stick the dialog to the bottom of the screen on mobile.
   *
   * @defaultValue true
   */
  bottomStickOnMobile?: boolean;
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export interface DialogBodyProps extends ComponentProps<typeof ark.div> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  dataPart?: string;
  dataScope?: string;
}

export interface DialogHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the dialog */
  description?: string;
  /** The title of the dialog */
  title?: string;
  dataPart?: string;
  dataScope?: string;
}

export type DialogRootProps = ComponentProps<typeof DialogPrimitive.Root> & WithTestId;

export type DialogProps = DialogRootProps;
// #endregion

// #region Parts
export function DialogRoot({
  modal = true,
  lazyMount = true,
  unmountOnExit = true,
  testId,
  ...rest
}: DialogRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <DialogContext value={{ modal, testId: dataTestId ?? testId }}>
      <DialogPrimitive.Root
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </DialogContext>
  );
}
DialogRoot.displayName = "Dialog";

export type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;

export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}
DialogTrigger.displayName = "Dialog.Trigger";

export type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Backdrop>;

export function DialogOverlay({ className, ...rest }: DialogOverlayProps) {
  const { modal } = useDialog();

  if (!modal) {
    return null;
  }

  return <DialogPrimitive.Backdrop {...rest} className={cn(dialogOverlayVariants(), className)} />;
}
DialogOverlay.displayName = "Dialog.Overlay";

export type DialogPositionerProps = ComponentProps<typeof DialogPrimitive.Positioner> & {
  bottomStickOnMobile?: boolean;
};

export function DialogPositioner({
  bottomStickOnMobile,
  className,
  ...rest
}: DialogPositionerProps) {
  return (
    <DialogPrimitive.Positioner
      {...rest}
      className={cn(
        dialogPositionerVariants({ bottomStickOnMobile: bottomStickOnMobile || undefined }),
        className,
      )}
    />
  );
}
DialogPositioner.displayName = "Dialog.Positioner";

export function DialogContent({
  showCloseButton = true,
  bottomStickOnMobile = true,
  size = "md",
  className,
  children,
  ...rest
}: DialogContentProps) {
  const { testId } = useDialog();

  return (
    <Portal>
      <DialogOverlay />

      <DialogPositioner bottomStickOnMobile={bottomStickOnMobile}>
        <DialogPrimitive.Content
          {...rest}
          className={cn(dialogContentVariants({ bottomStickOnMobile, size }), className)}
          data-testid={testId}
        >
          {children}

          {!!showCloseButton && (
            <DialogClose asChild>
              <Button
                aria-label="Close"
                className={dialogInlineVariants()}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </DialogClose>
          )}
        </DialogPrimitive.Content>
      </DialogPositioner>
    </Portal>
  );
}
DialogContent.displayName = "Dialog.Content";

export function DialogBody({
  scrollFade = false,
  className,
  dataPart = "body",
  dataScope = "dialog",
  ...rest
}: DialogBodyProps) {
  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={cn(dialogBodyVariants(), className)}
        data-part={dataPart}
        data-scope={dataScope}
      />
    </ScrollArea>
  );
}
DialogBody.displayName = "Dialog.Body";

export function DialogHeader({
  className,
  title,
  description,
  children,
  dataPart = "header",
  dataScope = "dialog",
  ...rest
}: DialogHeaderProps) {
  return (
    <ark.div
      {...rest}
      className={cn(dialogHeaderVariants(), className)}
      data-part={dataPart}
      data-scope={dataScope}
    >
      {!!title && <DialogTitle>{title}</DialogTitle>}

      {!!description && <DialogDescription>{description}</DialogDescription>}

      {children}
    </ark.div>
  );
}
DialogHeader.displayName = "Dialog.Header";

export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;

export function DialogTitle({ className, ...rest }: DialogTitleProps) {
  return <DialogPrimitive.Title {...rest} className={cn(dialogTitleVariants(), className)} />;
}
DialogTitle.displayName = "Dialog.Title";

export type DialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;

export function DialogDescription({ className, ...rest }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description {...rest} className={cn(dialogDescriptionVariants(), className)} />
  );
}
DialogDescription.displayName = "Dialog.Description";

export type DialogCloseProps = ComponentProps<typeof DialogPrimitive.CloseTrigger>;

export function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.CloseTrigger {...props} />;
}
DialogClose.displayName = "Dialog.Close";

export type DialogFooterProps = ComponentProps<typeof ark.div> & {
  dataPart?: string;
  dataScope?: string;
};

export function DialogFooter({
  className,
  dataPart = "footer",
  dataScope = "dialog",
  ...rest
}: DialogFooterProps) {
  return (
    <ark.div
      {...rest}
      className={cn(dialogFooterVariants(), className)}
      data-part={dataPart}
      data-scope={dataScope}
    />
  );
}
DialogFooter.displayName = "Dialog.Footer";
// #endregion
