import { Dialog as DialogPrimitive, Portal } from "@ark-ui/react";
import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogRootProps,
  DialogTriggerProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type { SheetRootContract, SheetContract } from "@pisagor/contracts";
import { type SheetVariantProps, sheetRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import type {
  DialogBackdropProps,
  DialogBodyProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogTitleProps,
} from "./dialog";
import { Dialog } from "./dialog";
import { useLocale } from "./provider/context";

// #region Context
const { Context: SheetStylesContext, useStyles } = createSlotRecipeContext({
  name: "Sheet",
  recipe: sheetRecipe,
});
// #endregion

// #region Types
export type SheetPositionerProps = DialogPositionerProps & SheetVariantProps;

export interface SheetContentProps
  extends DialogContentProps, SheetVariantProps {
  /**
   * Whether to show a close button at the top right corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}

export type SheetProps = DialogRootProps & SheetRootContract & SheetContract;

export type SheetTriggerProps = DialogTriggerProps;

export type SheetCloseTriggerProps = DialogCloseTriggerProps;
// #endregion

// #region Parts
export function SheetRoot({ recipe = sheetRecipe, ...rest }: SheetProps) {
  const slots = recipe();

  return (
    <SheetStylesContext value={{ slots, variants: {} as never }}>
      <Dialog.Root {...rest} />
    </SheetStylesContext>
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
  const { slots } = useStyles();

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
  const { m } = useLocale();
  const { slots } = useStyles();

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
              <Button
                aria-label={m("sheet.close")}
                className={slots.inline()}
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
  return <Dialog.Header {...props} data-part="header" data-scope="sheet" />;
}

export function SheetTitle(props: DialogTitleProps) {
  return <Dialog.Title {...props} />;
}

export function SheetDescription(props: DialogDescriptionProps) {
  return <Dialog.Description {...props} />;
}

export function SheetBody({ className, ...rest }: DialogBodyProps) {
  const { slots } = useStyles();

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
  const { slots } = useStyles();

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

export const Sheet = Object.assign(SheetRoot, {
  Backdrop: SheetBackdrop,
  Body: SheetBody,
  CloseTrigger: SheetCloseTrigger,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Positioner: SheetPositioner,
  Title: SheetTitle,
  Trigger: SheetTrigger,
});
