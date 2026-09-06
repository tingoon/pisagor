import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogTriggerProps,
} from "@ark-ui/react/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "@phosphor-icons/react";
import { type SheetVariantProps, sheetRecipe } from "@pisagor/recipes/sheet";

import { Button } from "../button";
import type {
  DialogBackdropProps,
  DialogBodyProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogRootProps,
  DialogTitleProps,
} from "../dialog";
import { Dialog } from "../dialog";
import { SheetContext, useSheet } from "./sheet.context";

// #region Types
export type SheetPositionerProps = DialogPositionerProps & SheetVariantProps;

export interface SheetContentProps extends DialogContentProps, SheetVariantProps {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export interface SheetProps extends DialogRootProps {
  /**
   * Style recipe. Defaults to `sheetRecipe` from `@pisagor/recipes/sheet`.
   *
   * @defaultValue sheetRecipe
   */
  recipe?: typeof sheetRecipe;
}

export type SheetTriggerProps = DialogTriggerProps;

export type SheetCloseTriggerProps = DialogCloseTriggerProps;
// #endregion

// #region Parts
export function SheetRoot({ recipe = sheetRecipe, ...rest }: SheetProps) {
  const slots = recipe();

  return (
    <SheetContext value={{ slots }}>
      <Dialog.Root {...rest} />
    </SheetContext>
  );
}

export function SheetTrigger(props: SheetTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function SheetBackdrop(props: DialogBackdropProps) {
  return <Dialog.Backdrop {...props} />;
}

export function SheetPositioner({
  placement,
  variant = "default",
  className,
  ...rest
}: SheetPositionerProps) {
  const { slots } = useSheet();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      className={slots.positioner({ className, placement, variant })}
    />
  );
}

export function SheetContent({
  placement = "right",
  variant = "default",
  showCloseButton = true,
  children,
  className,
  ...rest
}: SheetContentProps) {
  const { slots } = useSheet();

  return (
    <Portal>
      <SheetBackdrop />

      <SheetPositioner placement={placement} variant={variant}>
        <DialogPrimitive.Content
          {...rest}
          className={slots.content({ className, placement, variant })}
        >
          {children}

          {!!showCloseButton && (
            <SheetCloseTrigger asChild>
              <Button aria-label="Close" className={slots.inline()} size="icon-sm" variant="ghost">
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
  return <Dialog.Header {...props} data-part="header" data-scope="sheet" />;
}

export function SheetTitle(props: DialogTitleProps) {
  return <Dialog.Title {...props} />;
}

export function SheetDescription(props: DialogDescriptionProps) {
  return <Dialog.Description {...props} />;
}

export function SheetBody({ className, ...rest }: DialogBodyProps) {
  const { slots } = useSheet();

  return (
    <Dialog.Body
      {...rest}
      className={slots.body({ className })}
      data-part="body"
      data-scope="sheet"
    />
  );
}

export function SheetCloseTrigger(props: SheetCloseTriggerProps) {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function SheetFooter({ className, ...rest }: DialogFooterProps) {
  const { slots } = useSheet();

  return (
    <Dialog.Footer
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="sheet"
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
