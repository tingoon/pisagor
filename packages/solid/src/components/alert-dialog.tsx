import { Dialog as AlertDialogPrimitive } from "@ark-ui/solid";
import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps as DialogContentPrimitiveProps,
  DialogDescriptionProps,
  DialogPositionerProps as DialogPositionerPrimitiveProps,
  DialogRootProps as DialogRootPrimitiveProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/solid";
import type { AlertDialogProps as BaseAlertDialogRootProps } from "@pisagor/props";
import {
  type AlertDialogVariantProps,
  alertDialogRecipe,
} from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, createMemo, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon, createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { Context, useStyles, withContext } = createSlotRecipeContext({
  name: "AlertDialog",
  recipe: alertDialogRecipe,
});

interface AlertDialogModalState {
  readonly modal: boolean;
}

const { AlertDialogModalContext, useAlertDialogModal } =
  createContext("AlertDialogModal")<AlertDialogModalState>();
// #endregion

export interface AlertDialogRootProps
  extends DialogRootPrimitiveProps, BaseAlertDialogRootProps {}

export interface AlertDialogContentProps
  extends DialogContentPrimitiveProps, AlertDialogVariantProps {
  bottomStickOnMobile?: boolean;
  showCloseButton?: boolean;
}

export interface AlertDialogBodyProps extends ComponentProps<"div"> {
  scrollFade?: boolean;
}

export type AlertDialogHeaderProps = ComponentProps<"div">;

export interface AlertDialogPositionerProps extends DialogPositionerPrimitiveProps {
  bottomStickOnMobile?: boolean;
}

export type AlertDialogFooterProps = ComponentProps<"div">;

export interface AlertDialogActionProps
  extends DialogCloseTriggerProps, Omit<ButtonProps, "variant"> {
  variant?: "default" | "destructive";
}

export interface AlertDialogCancelProps
  extends DialogCloseTriggerProps, Omit<ButtonProps, "variant"> {}

export interface AlertDialogProps extends Omit<
  AlertDialogRootProps,
  "children" | "title"
> {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  trigger?:
    | JSX.Element
    | ((props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => JSX.Element);
}

export function AlertDialogRoot(props: AlertDialogRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "modal",
    "recipe",
    "role",
    "children",
  ]);
  const modal = () => local.modal ?? true;
  const slots = createMemo(() => (local.recipe ?? alertDialogRecipe)());

  return (
    <Context
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <AlertDialogModalContext
        value={{
          get modal() {
            return modal();
          },
        }}
      >
        <AlertDialogPrimitive.Root
          {...rest}
          modal={modal()}
          role={local.role ?? "alertdialog"}
        >
          {local.children}
        </AlertDialogPrimitive.Root>
      </AlertDialogModalContext>
    </Context>
  );
}

export function AlertDialogTrigger(props: DialogTriggerProps): JSX.Element {
  return <AlertDialogPrimitive.Trigger {...props} />;
}

export function AlertDialogBackdrop(props: DialogBackdropProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();
  const state = useAlertDialogModal();

  return (
    <Show when={state.modal}>
      <AlertDialogPrimitive.Backdrop
        {...rest}
        class={styles.slots.backdrop({ class: local.class })}
      />
    </Show>
  );
}

export function AlertDialogPositioner(
  props: AlertDialogPositionerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["bottomStickOnMobile", "class"]);
  const styles = useStyles();

  return (
    <AlertDialogPrimitive.Positioner
      {...rest}
      class={styles.slots.positioner({
        bottomStickOnMobile: local.bottomStickOnMobile,
        class: local.class,
      })}
    />
  );
}

export function AlertDialogContent(
  props: AlertDialogContentProps,
): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "size",
    "bottomStickOnMobile",
    "showCloseButton",
    "children",
    "class",
  ]);
  const styles = useStyles();
  const size = () => local.size ?? "md";
  const bottomStickOnMobile = () => local.bottomStickOnMobile ?? true;
  const showCloseButton = () => local.showCloseButton ?? false;

  return (
    <Portal>
      <AlertDialogBackdrop />
      <AlertDialogPositioner bottomStickOnMobile={bottomStickOnMobile()}>
        <AlertDialogPrimitive.Content
          {...rest}
          class={styles.slots.content({
            bottomStickOnMobile: bottomStickOnMobile(),
            class: local.class,
            size: size(),
          })}
        >
          {local.children}
          <Show when={showCloseButton()}>
            <AlertDialogCloseTrigger
              asChild={(triggerProps) => (
                <Button
                  {...triggerProps({ class: styles.slots.inline() })}
                  aria-label={m("dialog.close")}
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              )}
            />
          </Show>
        </AlertDialogPrimitive.Content>
      </AlertDialogPositioner>
    </Portal>
  );
}

export function AlertDialogBody(props: AlertDialogBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const styles = useStyles();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <div
        {...rest}
        class={styles.slots.body({ class: local.class })}
        data-part="body"
        data-scope="alert-dialog"
      />
    </ScrollArea>
  );
}

export function AlertDialogHeader(props: AlertDialogHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <div
      {...rest}
      class={styles.slots.header({ class: local.class })}
      data-part="header"
      data-scope="alert-dialog"
    />
  );
}

export const AlertDialogTitle: Component<DialogTitleProps> = withContext(
  AlertDialogPrimitive.Title,
  { name: "Title" },
);

export const AlertDialogDescription: Component<DialogDescriptionProps> =
  withContext(AlertDialogPrimitive.Description, { name: "Description" });

export function AlertDialogCloseTrigger(
  props: DialogCloseTriggerProps,
): JSX.Element {
  return <AlertDialogPrimitive.CloseTrigger {...props} />;
}

export function AlertDialogFooter(props: AlertDialogFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <div
      {...rest}
      class={styles.slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="alert-dialog"
    />
  );
}

export function AlertDialogAction(props: AlertDialogActionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant"]);

  return (
    <AlertDialogCloseTrigger
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          {...rest}
          variant={local.variant ?? "default"}
        />
      )}
    />
  );
}

export function AlertDialogCancel(props: AlertDialogCancelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["asChild", "class"]);

  return (
    <AlertDialogCloseTrigger
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: local.class })}
          {...rest}
          variant="outline"
        />
      )}
    />
  );
}

export function AlertDialogShorthand(props: AlertDialogProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "description",
    "title",
    "trigger",
  ]);

  return (
    <AlertDialogRoot {...rest}>
      <Show when={local.trigger !== undefined}>
        <AlertDialogTrigger
          asChild={(triggerProps) => {
            if (typeof local.trigger === "function") {
              return local.trigger(triggerProps());
            }

            return (
              <span {...triggerProps()} style={{ display: "contents" }}>
                {local.trigger}
              </span>
            );
          }}
        />
      </Show>

      <AlertDialogContent>
        <Show
          when={local.title !== undefined || local.description !== undefined}
        >
          <AlertDialogHeader>
            <Show when={local.title !== undefined}>
              <AlertDialogTitle>{local.title}</AlertDialogTitle>
            </Show>
            <Show when={local.description !== undefined}>
              <AlertDialogDescription>
                {local.description}
              </AlertDialogDescription>
            </Show>
          </AlertDialogHeader>
        </Show>
        <Show when={local.actions !== undefined}>
          <AlertDialogFooter>{local.actions}</AlertDialogFooter>
        </Show>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}

export type {
  DialogBackdropProps as AlertDialogBackdropProps,
  DialogCloseTriggerProps as AlertDialogCloseTriggerProps,
  DialogDescriptionProps as AlertDialogDescriptionProps,
  DialogTitleProps as AlertDialogTitleProps,
  DialogTriggerProps as AlertDialogTriggerProps,
} from "@ark-ui/solid";

export const AlertDialog = Object.assign(AlertDialogShorthand, {
  Action: AlertDialogAction,
  Backdrop: AlertDialogBackdrop,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  CloseTrigger: AlertDialogCloseTrigger,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Positioner: AlertDialogPositioner,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
