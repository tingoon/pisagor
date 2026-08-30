import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogDescriptionProps,
  DialogContentProps as DialogPrimitiveContentProps,
  DialogPositionerProps as DialogPrimitivePositionerProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import { type DialogVariantProps, dialogRecipe } from "@pisagor/recipes/dialog";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { DialogContext, useDialog } from "./dialog.context";

// #region Types
export interface DialogContentProps extends DialogPrimitiveContentProps, DialogVariantProps {
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
}

export type DialogHeaderProps = ComponentProps<typeof ark.div>;

export type DialogPositionerProps = DialogPrimitivePositionerProps & {
  bottomStickOnMobile?: boolean;
};

export type DialogFooterProps = ComponentProps<typeof ark.div>;

export interface DialogProps extends Omit<DialogRootProps, "title"> {
  /** Footer actions. */
  actions?: ReactNode;
  /** Header description content. */
  description?: ReactNode;
  /** Header title content. */
  title?: ReactNode;
  /** Control that opens the dialog. */
  trigger?: ReactNode;
}
// #endregion

// #region Parts
export function DialogRoot({ modal = true, ...rest }: DialogRootProps) {
  const slots = dialogRecipe();

  return (
    <DialogContext value={{ modal, slots }}>
      <DialogPrimitive.Root {...rest} modal={modal} />
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
  size = "md",
  bottomStickOnMobile = true,
  showCloseButton = true,
  children,
  className,
  ...rest
}: DialogContentProps) {
  const { slots } = useDialog();

  return (
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
  );
}

export function DialogBody({ scrollFade = false, className, ...rest }: DialogBodyProps) {
  const { slots } = useDialog();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={slots.body({ className })}
        data-part="body"
        data-scope="dialog"
      />
    </ScrollArea>
  );
}

export function DialogHeader({ children, className, ...rest }: DialogHeaderProps) {
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="dialog"
    >
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

export function DialogFooter({ className, ...rest }: DialogFooterProps) {
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="dialog"
    />
  );
}
// #endregion

// #region Shorthand
export function DialogShorthand({
  actions,
  children,
  description,
  title,
  trigger,
  ...rest
}: DialogProps) {
  return (
    <DialogRoot {...rest}>
      {trigger !== undefined && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <Portal>
        <DialogBackdrop />

        <DialogPositioner>
          <DialogContent>
            {(title !== undefined || description !== undefined) && (
              <DialogHeader>
                {title !== undefined && <DialogTitle>{title}</DialogTitle>}

                {description !== undefined && <DialogDescription>{description}</DialogDescription>}
              </DialogHeader>
            )}

            {children !== undefined && <DialogBody>{children}</DialogBody>}

            {actions !== undefined && <DialogFooter>{actions}</DialogFooter>}
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
// #endregion

// #region Display Names
DialogRoot.displayName = "Dialog.Root";
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
DialogShorthand.displayName = "Dialog";
// #endregion
