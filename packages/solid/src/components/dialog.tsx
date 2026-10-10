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
import type { DialogProps as BaseDialogRootProps } from "@pisagor/props";
import { type DialogVariantProps, dialogRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { XIcon } from "../internal/icons";
import { createContext } from "../utils";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: DialogStylesContext,
  useStyles: useDialog,
  withContext,
} = createSlotRecipeContext({ name: "Dialog", recipe: dialogRecipe });

/** Non-style state: whether the dialog is modal (controls the backdrop). */
interface DialogModalState {
  readonly modal: boolean;
}

const { DialogModalContext, useDialogModal } =
  createContext("DialogModal")<DialogModalState>();

export { useDialog };
// #endregion

export interface LocalDialogRootProps
  extends DialogPrimitiveRootProps,
    BaseDialogRootProps {}

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

export interface DialogProps extends Omit<LocalDialogRootProps, "title"> {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  /** Prefer a render fn for Solid asChild; JSX elements are wrapped with display:contents. */
  trigger?:
    | JSX.Element
    | ((props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element);
}

export function DialogRoot(props: LocalDialogRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["modal", "recipe"]);
  const modal = () => local.modal ?? true;
  const slots = createMemo(() => (local.recipe ?? dialogRecipe)());

  return (
    <DialogStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <DialogModalContext
        value={{
          get modal() {
            return modal();
          },
        }}
      >
        <DialogPrimitive.Root {...rest} modal={modal()} />
      </DialogModalContext>
    </DialogStylesContext>
  );
}

export function DialogTrigger(props: DialogTriggerProps): JSX.Element {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogBackdrop(props: DialogBackdropProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDialog();
  const state = useDialogModal();

  return (
    <Show when={state.modal}>
      <DialogPrimitive.Backdrop
        {...rest}
        class={styles.slots.backdrop({ class: local.class })}
      />
    </Show>
  );
}

export function DialogPositioner(props: DialogPositionerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["bottomStickOnMobile", "class"]);
  const styles = useDialog();

  return (
    <DialogPrimitive.Positioner
      {...rest}
      class={styles.slots.positioner({
        bottomStickOnMobile: local.bottomStickOnMobile,
        class: local.class,
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
  const styles = useDialog();
  const size = () => local.size ?? "md";
  const bottomStickOnMobile = () => local.bottomStickOnMobile ?? true;
  const showCloseButton = () => local.showCloseButton ?? true;

  return (
    <DialogPrimitive.Content
      {...rest}
      class={styles.slots.content({
        bottomStickOnMobile: bottomStickOnMobile(),
        class: local.class,
        size: size(),
      })}
    >
      {local.children}
      <Show when={showCloseButton()}>
        <DialogCloseTrigger
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
  );
}

export function DialogBody(props: DialogBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const styles = useDialog();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <ark.div
        {...rest}
        class={styles.slots.body({ class: local.class })}
        data-part="body"
        data-scope="dialog"
      />
    </ScrollArea>
  );
}

export function DialogHeader(props: DialogHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDialog();

  return (
    <ark.div
      {...rest}
      class={styles.slots.header({ class: local.class })}
      data-part="header"
      data-scope="dialog"
    />
  );
}

export const DialogTitle: Component<DialogTitleProps> = withContext(
  DialogPrimitive.Title,
  { name: "Title" },
);

export const DialogDescription: Component<DialogDescriptionProps> = withContext(
  DialogPrimitive.Description,
  { name: "Description" },
);

export function DialogCloseTrigger(
  props: DialogCloseTriggerProps,
): JSX.Element {
  return <DialogPrimitive.CloseTrigger {...props} />;
}

export function DialogFooter(props: DialogFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDialog();

  return (
    <ark.div
      {...rest}
      class={styles.slots.footer({ class: local.class })}
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

export type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/solid/dialog";

export const Dialog = Object.assign(DialogShorthand, {
  Backdrop: DialogBackdrop,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Positioner: DialogPositioner,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
