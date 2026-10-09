import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogTriggerProps,
} from "@ark-ui/solid/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/solid/dialog";
import type { SheetProps as BaseSheetProps } from "@pisagor/props";
import { type SheetVariantProps, sheetRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { XIcon } from "../internal/icons";
import { Button } from "./button";
import type {
  DialogBackdropProps,
  DialogBodyProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogRootProps,
  DialogTitleProps,
} from "./dialog";
import { Dialog } from "./dialog";

// #region Context
const { Context: SheetStylesContext, useStyles: useSheet } =
  createSlotRecipeContext({ name: "Sheet", recipe: sheetRecipe });
// #endregion

export type SheetPositionerProps = DialogPositionerProps & SheetVariantProps;

export interface SheetContentProps
  extends DialogContentProps,
    SheetVariantProps {
  showCloseButton?: boolean;
}

export interface SheetProps
  extends Omit<DialogRootProps, "recipe">,
    BaseSheetProps {}

export type SheetTriggerProps = DialogTriggerProps;
export type SheetCloseTriggerProps = DialogCloseTriggerProps;

export function SheetRoot(props: SheetProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe"]);
  const slots = createMemo(() => (local.recipe ?? sheetRecipe)());

  return (
    <SheetStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <Dialog.Root {...rest} />
    </SheetStylesContext>
  );
}

export function SheetTrigger(props: SheetTriggerProps): JSX.Element {
  return <DialogPrimitive.Trigger {...props} />;
}

export function SheetBackdrop(props: DialogBackdropProps): JSX.Element {
  return <Dialog.Backdrop {...props} />;
}

export function SheetPositioner(props: SheetPositionerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["placement", "variant", "class"]);
  const styles = useSheet();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      class={styles.slots.positioner({
        class: local.class,
        placement: local.placement,
        variant: local.variant,
      })}
    />
  );
}

export function SheetContent(props: SheetContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "variant",
    "showCloseButton",
    "children",
    "class",
  ]);
  const styles = useSheet();
  const placement = () => local.placement ?? "right";
  const variant = () => local.variant ?? "default";
  const showCloseButton = () => local.showCloseButton ?? true;

  return (
    <Portal>
      <SheetBackdrop />
      <SheetPositioner placement={placement()} variant={variant()}>
        <DialogPrimitive.Content
          {...rest}
          class={styles.slots.content({
            class: local.class,
            placement: placement(),
            variant: variant(),
          })}
        >
          {local.children}
          <Show when={showCloseButton()}>
            <SheetCloseTrigger
              asChild={(triggerProps) => (
                <Button
                  {...triggerProps({ class: styles.slots.inline() })}
                  aria-label="Close"
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              )}
            />
          </Show>
        </DialogPrimitive.Content>
      </SheetPositioner>
    </Portal>
  );
}

export function SheetHeader(props: DialogHeaderProps): JSX.Element {
  return <Dialog.Header {...props} data-part="header" data-scope="sheet" />;
}

export function SheetTitle(props: DialogTitleProps): JSX.Element {
  return <Dialog.Title {...props} />;
}

export function SheetDescription(props: DialogDescriptionProps): JSX.Element {
  return <Dialog.Description {...props} />;
}

export function SheetBody(props: DialogBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSheet();

  return (
    <Dialog.Body
      {...rest}
      class={styles.slots.body({ class: local.class })}
      data-part="body"
      data-scope="sheet"
    />
  );
}

export function SheetCloseTrigger(props: SheetCloseTriggerProps): JSX.Element {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function SheetFooter(props: DialogFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSheet();

  return (
    <Dialog.Footer
      {...rest}
      class={styles.slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="sheet"
    />
  );
}

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
