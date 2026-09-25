import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogTriggerProps,
} from "@ark-ui/solid/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/solid/dialog";
import { type SheetVariantProps, sheetRecipe } from "@pisagor/recipes/sheet";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon } from "../../internal/icons";
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

export type SheetPositionerProps = DialogPositionerProps & SheetVariantProps;

export interface SheetContentProps
  extends DialogContentProps,
    SheetVariantProps {
  showCloseButton?: boolean;
}

export interface SheetProps extends Omit<DialogRootProps, "recipe"> {
  recipe?: typeof sheetRecipe;
}

export type SheetTriggerProps = DialogTriggerProps;
export type SheetCloseTriggerProps = DialogCloseTriggerProps;

export function SheetRoot(props: SheetProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "children"]);
  const slots = () => (local.recipe ?? sheetRecipe)();

  return (
    <SheetContext value={{ slots: slots() }}>
      <Dialog.Root {...rest}>{local.children}</Dialog.Root>
    </SheetContext>
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
  const { slots } = useSheet();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      class={slots.positioner({
        class: cn(local.class),
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
  const { slots } = useSheet();
  const placement = () => local.placement ?? "right";
  const variant = () => local.variant ?? "default";
  const showCloseButton = () => local.showCloseButton ?? true;

  return (
    <Portal>
      <SheetBackdrop />
      <SheetPositioner placement={placement()} variant={variant()}>
        <DialogPrimitive.Content
          {...rest}
          class={slots.content({
            class: cn(local.class),
            placement: placement(),
            variant: variant(),
          })}
        >
          {local.children}
          <Show when={showCloseButton()}>
            <SheetCloseTrigger
              asChild={(triggerProps) => (
                <Button
                  {...triggerProps({ class: slots.inline() })}
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
  const { slots } = useSheet();

  return (
    <Dialog.Body
      {...rest}
      class={slots.body({ class: local.class })}
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
  const { slots } = useSheet();

  return (
    <Dialog.Footer
      {...rest}
      class={slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="sheet"
    />
  );
}
