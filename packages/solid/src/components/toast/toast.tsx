import type {
  CreateToasterReturn,
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToasterProps as ToasterPrimitiveProps,
  ToastRootProps,
  ToastTitleProps,
} from "@ark-ui/solid/toast";
import {
  createToaster,
  Toaster as ToasterPrimitive,
  Toast as ToastPrimitive,
} from "@ark-ui/solid/toast";
import {
  type ToastItemRecipeSlot,
  toastItemRecipe,
  toastRecipe,
} from "@pisagor/recipes/toast";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
  XIcon,
} from "../../internal/icons";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";
import { Spinner } from "../spinner";
import { ToastItemContext, useToastItem } from "./toast.context";

type ToastItemClassNames = VariantClassNames<ToastItemRecipeSlot>;

export interface ToasterRootProps
  extends Omit<ToasterPrimitiveProps, "toaster" | "children"> {
  recipe?: typeof toastRecipe;
}

export interface ToasterProps extends ToasterRootProps {
  toaster?: CreateToasterReturn<JSX.Element>;
}

export interface ToastItemRootProps extends ToastRootProps {
  itemRecipe?: typeof toastItemRecipe;
}

export interface ToastItemProps extends ToastItemRootProps {
  classNames?: ToastItemClassNames;
  actionsProps?: Omit<ComponentProps<"div">, "class">;
  actionTriggerProps?: Omit<
    ToastActionTriggerProps,
    "asChild" | "children" | "class" | "onClick"
  >;
  closeTriggerProps?: Omit<
    ToastCloseTriggerProps,
    "asChild" | "children" | "class"
  >;
  descriptionProps?: Omit<ToastDescriptionProps, "children" | "class">;
  iconProps?: Omit<ComponentProps<"div">, "class">;
  titleProps?: Omit<ToastTitleProps, "children" | "class">;
  toast: ToastPrimitive.Options;
}

export const toast = createToaster({
  max: 3,
  overlap: true,
  placement: "bottom-end",
});

export function ToasterRoot(props: ToasterProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "toaster",
    "recipe",
    "class",
    "style",
  ]);
  const toasterInstance = () => local.toaster ?? toast;
  const recipe = () => local.recipe ?? toastRecipe;

  return (
    <Portal>
      <ToasterPrimitive
        {...rest}
        class={recipe()({ class: local.class })}
        style={{
          "--width": "356px",
          ...(typeof local.style === "object" && local.style !== null
            ? local.style
            : {}),
        }}
        toaster={toasterInstance()}
      >
        {(toastItem) => <ToastItem toast={toastItem()} />}
      </ToasterPrimitive>
    </Portal>
  );
}

const TOAST_ICONS = {
  error: () => <WarningCircleIcon />,
  info: () => <InfoIcon />,
  loading: () => <Spinner />,
  success: () => <CheckCircleIcon />,
  warning: () => <WarningIcon />,
} as const;

function ToastItemRoot(props: ToastItemRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? toastItemRecipe)();

  return (
    <ToastItemContext value={{ slots: slots() }}>
      <ToastPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
      >
        {local.children}
      </ToastPrimitive.Root>
    </ToastItemContext>
  );
}

function ToastItemContent(
  props: Omit<ToastItemProps, keyof ToastItemRootProps> &
    Pick<ToastItemProps, "toast">,
): JSX.Element {
  const [local] = splitProps(props, [
    "actionsProps",
    "actionTriggerProps",
    "closeTriggerProps",
    "descriptionProps",
    "iconProps",
    "titleProps",
    "toast",
    "classNames",
  ]);
  const { slots } = useToastItem();
  const toastData = () => local.toast;
  const ToastIcon = () => {
    const type = toastData().type;
    if (!type || !(type in TOAST_ICONS)) return null;
    return TOAST_ICONS[type as keyof typeof TOAST_ICONS]();
  };
  const isExplicitClosable = () => toastData().closable === false;

  return (
    <>
      <div class={slots.content({ class: local.classNames?.content })}>
        <div
          {...local.iconProps}
          class={slots.icon({ class: local.classNames?.icon })}
          data-part="icon"
          data-scope="toast"
        >
          {ToastIcon()}
        </div>
        <div class={slots.body({ class: local.classNames?.body })}>
          <ToastPrimitive.Title
            {...local.titleProps}
            class={slots.title({ class: local.classNames?.title })}
          >
            {toastData().title}
          </ToastPrimitive.Title>
          <Show when={toastData().description}>
            <ToastPrimitive.Description
              {...local.descriptionProps}
              class={slots.description({
                class: local.classNames?.description,
              })}
            >
              {toastData().description}
            </ToastPrimitive.Description>
          </Show>
        </div>
      </div>
      <div
        {...local.actionsProps}
        class={slots.actions({ class: local.classNames?.actions })}
      >
        <Show when={toastData().action}>
          <ToastPrimitive.ActionTrigger
            {...local.actionTriggerProps}
            asChild={(triggerProps) => (
              <Button
                {...triggerProps()}
                onClick={toastData().action?.onClick}
                size="sm"
                variant="secondary"
              >
                {toastData().action?.label}
              </Button>
            )}
          />
        </Show>
        <Show when={!isExplicitClosable()}>
          <ToastPrimitive.CloseTrigger
            {...local.closeTriggerProps}
            asChild={(triggerProps) => (
              <Button
                {...triggerProps({
                  class: slots.close({ class: local.classNames?.close }),
                })}
                aria-label="Close"
                size="icon-xs"
                variant="ghost"
              >
                <XIcon />
              </Button>
            )}
          />
        </Show>
      </div>
    </>
  );
}

export function ToastItem(props: ToastItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actionsProps",
    "actionTriggerProps",
    "closeTriggerProps",
    "descriptionProps",
    "iconProps",
    "titleProps",
    "toast",
    "class",
    "classNames",
  ]);

  return (
    <ToastItemRoot {...rest} class={local.class}>
      <ToastItemContent
        actionsProps={local.actionsProps}
        actionTriggerProps={local.actionTriggerProps}
        classNames={local.classNames}
        closeTriggerProps={local.closeTriggerProps}
        descriptionProps={local.descriptionProps}
        iconProps={local.iconProps}
        titleProps={local.titleProps}
        toast={local.toast}
      />
    </ToastItemRoot>
  );
}
