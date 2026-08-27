import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import { type DialogVariantProps, dialogVariants } from "@pisagor/recipes/dialog";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { DialogContext, useDialog } from "./dialog.context";

// #region Types
export interface DialogContentProps
  extends ComponentProps<typeof DialogPrimitive.Content>,
    DialogVariantProps {
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

export type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;

export type DialogBackdropProps = ComponentProps<typeof DialogPrimitive.Backdrop>;

export type DialogPositionerProps = ComponentProps<typeof DialogPrimitive.Positioner> & {
  bottomStickOnMobile?: boolean;
};

export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;

export type DialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>;

export type DialogCloseTriggerProps = ComponentProps<typeof DialogPrimitive.CloseTrigger>;

export type DialogFooterProps = ComponentProps<typeof ark.div> & {
  dataPart?: string;
  dataScope?: string;
};

export type DialogRootProps = ComponentProps<typeof DialogPrimitive.Root>;

export type DialogProps = DialogRootProps;
// #endregion

// #region Parts
export function DialogRoot({
  modal = true,
  lazyMount = true,
  unmountOnExit = true,
  ...rest
}: DialogRootProps) {
  const slots = useMemo(() => dialogVariants(), []);

  return (
    <DialogContext value={{ modal, slots }}>
      <DialogPrimitive.Root
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </DialogContext>
  );
}

export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogBackdrop({ className, ...rest }: DialogBackdropProps) {
  const { modal, slots } = useDialog();

  if (!modal) {
    return null;
  }

  return <DialogPrimitive.Backdrop {...rest} className={slots.backdrop({ className })} />;
}

export function DialogPositioner({
  bottomStickOnMobile,
  className,
  ...rest
}: DialogPositionerProps) {
  const { slots } = useDialog();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      className={slots.positioner({ bottomStickOnMobile, className })}
    />
  );
}

export function DialogContent({
  showCloseButton = true,
  bottomStickOnMobile = true,
  size = "md",
  className,
  children,
  ...rest
}: DialogContentProps) {
  const { slots } = useDialog();

  return (
    <Portal>
      <DialogBackdrop />

      <DialogPositioner bottomStickOnMobile={bottomStickOnMobile}>
        <DialogPrimitive.Content
          {...rest}
          className={slots.content({ bottomStickOnMobile, className, size })}
        >
          {children}

          {!!showCloseButton && (
            <DialogCloseTrigger asChild>
              <Button aria-label="Close" className={slots.inline()} size="icon-sm" variant="ghost">
                <XIcon />
              </Button>
            </DialogCloseTrigger>
          )}
        </DialogPrimitive.Content>
      </DialogPositioner>
    </Portal>
  );
}

export function DialogBody({
  scrollFade = false,
  className,
  dataPart = "body",
  dataScope = "dialog",
  ...rest
}: DialogBodyProps) {
  const { slots } = useDialog();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={slots.body({ className })}
        data-part={dataPart}
        data-scope={dataScope}
      />
    </ScrollArea>
  );
}

export function DialogHeader({
  className,
  title,
  description,
  children,
  dataPart = "header",
  dataScope = "dialog",
  ...rest
}: DialogHeaderProps) {
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
      data-part={dataPart}
      data-scope={dataScope}
    >
      {!!title && <DialogTitle>{title}</DialogTitle>}

      {!!description && <DialogDescription>{description}</DialogDescription>}

      {children}
    </ark.div>
  );
}

export function DialogTitle({ className, ...rest }: DialogTitleProps) {
  const { slots } = useDialog();

  return <DialogPrimitive.Title {...rest} className={slots.title({ className })} />;
}

export function DialogDescription({ className, ...rest }: DialogDescriptionProps) {
  const { slots } = useDialog();

  return <DialogPrimitive.Description {...rest} className={slots.description({ className })} />;
}

export function DialogCloseTrigger(props: DialogCloseTriggerProps) {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function DialogFooter({
  className,
  dataPart = "footer",
  dataScope = "dialog",
  ...rest
}: DialogFooterProps) {
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
      data-part={dataPart}
      data-scope={dataScope}
    />
  );
}
// #endregion

// #region Display Names
DialogRoot.displayName = "Dialog";
DialogTrigger.displayName = "Dialog.Trigger";
DialogBackdrop.displayName = "Dialog.Backdrop";
DialogPositioner.displayName = "Dialog.Positioner";
DialogContent.displayName = "Dialog.Content";
DialogBody.displayName = "Dialog.Body";
DialogHeader.displayName = "Dialog.Header";
DialogTitle.displayName = "Dialog.Title";
DialogDescription.displayName = "Dialog.Description";
DialogCloseTrigger.displayName = "Dialog.CloseTrigger";
DialogFooter.displayName = "Dialog.Footer";
// #endregion
