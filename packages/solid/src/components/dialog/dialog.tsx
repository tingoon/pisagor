import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogDescriptionProps,
  DialogContentProps as DialogPrimitiveContentProps,
  DialogPositionerProps as DialogPrimitivePositionerProps,
  DialogRootProps as DialogPrimitiveRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/solid/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/solid/dialog";
import { ark } from "@ark-ui/solid/factory";
import { type DialogVariantProps, dialogRecipe } from "@pisagor/recipes/dialog";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon } from "../../internal/icons";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { DialogContext, useDialog } from "./dialog.context";

export interface DialogRootProps extends DialogPrimitiveRootProps {
  recipe?: typeof dialogRecipe;
}

export interface DialogContentProps
  extends DialogPrimitiveContentProps,
    DialogVariantProps {
  bottomStickOnMobile?: boolean;
  showCloseButton?: boolean;
}

export interface DialogBodyProps extends ComponentProps<typeof ark.div> {
  scrollFade?: boolean;
}

export type DialogHeaderProps = ComponentProps<typeof ark.div>;

export interface DialogPositionerProps extends DialogPrimitivePositionerProps {
  bottomStickOnMobile?: boolean;
}

export type DialogFooterProps = ComponentProps<typeof ark.div>;

export interface DialogProps extends Omit<DialogRootProps, "title"> {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  /** Prefer a render fn for Solid asChild; JSX elements are wrapped with display:contents. */
  trigger?:
    | JSX.Element
    | ((props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element);
}

export function DialogRoot(props: DialogRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["modal", "recipe", "children"]);
  const modal = () => local.modal ?? true;
  const slots = () => (local.recipe ?? dialogRecipe)();

  return (
    <DialogContext value={{ modal: modal(), slots: slots() }}>
      <DialogPrimitive.Root {...rest} modal={modal()}>
        {local.children}
      </DialogPrimitive.Root>
    </DialogContext>
  );
}

export function DialogTrigger(props: DialogTriggerProps): JSX.Element {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogBackdrop(props: DialogBackdropProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { modal, slots } = useDialog();

  return (
    <Show when={modal !== false}>
      <DialogPrimitive.Backdrop
        {...rest}
        class={slots.backdrop({ class: cn(local.class) })}
      />
    </Show>
  );
}

export function DialogPositioner(props: DialogPositionerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["bottomStickOnMobile", "class"]);
  const { slots } = useDialog();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      class={slots.positioner({
        bottomStickOnMobile: local.bottomStickOnMobile,
        class: cn(local.class),
      })}
    />
  );
}

export function DialogContent(props: DialogContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "bottomStickOnMobile",
    "showCloseButton",
    "children",
    "class",
  ]);
  const { slots } = useDialog();
  const size = () => local.size ?? "md";
  const bottomStickOnMobile = () => local.bottomStickOnMobile ?? true;
  const showCloseButton = () => local.showCloseButton ?? true;

  return (
    <DialogPrimitive.Content
      {...rest}
      class={slots.content({
        bottomStickOnMobile: bottomStickOnMobile(),
        class: cn(local.class),
        size: size(),
      })}
    >
      {local.children}
      <Show when={showCloseButton()}>
        <DialogCloseTrigger
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
  );
}

export function DialogBody(props: DialogBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const { slots } = useDialog();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <ark.div
        {...rest}
        class={slots.body({ class: cn(local.class) })}
        data-part="body"
        data-scope="dialog"
      />
    </ScrollArea>
  );
}

export function DialogHeader(props: DialogHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      class={slots.header({ class: cn(local.class) })}
      data-part="header"
      data-scope="dialog"
    >
      {local.children}
    </ark.div>
  );
}

export function DialogTitle(props: DialogTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDialog();
  return (
    <DialogPrimitive.Title
      {...rest}
      class={slots.title({ class: cn(local.class) })}
    />
  );
}

export function DialogDescription(props: DialogDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDialog();
  return (
    <DialogPrimitive.Description
      {...rest}
      class={slots.description({ class: cn(local.class) })}
    />
  );
}

export function DialogCloseTrigger(
  props: DialogCloseTriggerProps,
): JSX.Element {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function DialogFooter(props: DialogFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDialog();

  return (
    <ark.div
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="dialog"
    />
  );
}

export function DialogShorthand(props: DialogProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "children",
    "description",
    "title",
    "trigger",
  ]);

  return (
    <DialogRoot {...rest}>
      <Show when={local.trigger !== undefined}>
        <DialogTrigger
          asChild={(triggerProps) => {
            if (typeof local.trigger === "function") {
              return local.trigger(triggerProps());
            }
            return (
              <ark.span {...triggerProps()} style={{ display: "contents" }}>
                {local.trigger}
              </ark.span>
            );
          }}
        />
      </Show>

      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <Show
              when={
                local.title !== undefined || local.description !== undefined
              }
            >
              <DialogHeader>
                <Show when={local.title !== undefined}>
                  <DialogTitle>{local.title}</DialogTitle>
                </Show>
                <Show when={local.description !== undefined}>
                  <DialogDescription>{local.description}</DialogDescription>
                </Show>
              </DialogHeader>
            </Show>
            <Show when={local.children !== undefined}>
              <DialogBody>{local.children}</DialogBody>
            </Show>
            <Show when={local.actions !== undefined}>
              <DialogFooter>{local.actions}</DialogFooter>
            </Show>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
}
