import type { AlertProps as BaseAlertRootProps } from "@pisagor/props";
import { type AlertRecipeSlot, alertRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Alert",
  recipe: alertRecipe,
});
// #endregion

// #region Types
export type AlertRootProps = Omit<ComponentProps<"div">, "title"> &
  BaseAlertRootProps;

export type AlertTitleProps = ComponentProps<"div">;

export type AlertDescriptionProps = ComponentProps<"div">;

export type AlertActionProps = ComponentProps<"div">;

type AlertClassNames = VariantClassNames<AlertRecipeSlot>;

export interface AlertProps extends Omit<AlertRootProps, "children"> {
  /** Trailing action area. */
  action?: JSX.Element;
  /** Description content. */
  description?: JSX.Element;
  /** Leading icon, rendered as a direct child so the grid layout aligns. */
  icon?: JSX.Element;
  /** Bold title line. */
  title?: JSX.Element;
  /** Slot class names */
  classNames?: AlertClassNames;
  /** Extra props forwarded to the alert action element */
  actionProps?: Omit<AlertActionProps, "children" | "class">;
  /** Extra props forwarded to the alert description element */
  descriptionProps?: Omit<AlertDescriptionProps, "children" | "class">;
  /** Extra props forwarded to the alert title element */
  titleProps?: Omit<AlertTitleProps, "children" | "class">;
}
// #endregion

// #region Parts
export const AlertRoot: Component<AlertRootProps> = withProvider("div", {
  name: "Root",
  slot: "base",
});

export const AlertTitle = withContext("div", { name: "Title" });

export const AlertDescription = withContext("div", { name: "Description" });

export const AlertAction = withContext("div", { name: "Action" });
// #endregion

// #region Shorthand
export function AlertShorthand(props: AlertProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "action",
    "actionProps",
    "description",
    "descriptionProps",
    "icon",
    "title",
    "titleProps",
    "classNames",
  ]);

  return (
    <AlertRoot {...rest}>
      {local.icon}
      <Show when={local.title !== undefined}>
        <AlertTitle {...local.titleProps} class={local.classNames?.title}>
          {local.title}
        </AlertTitle>
      </Show>
      <Show when={local.description !== undefined}>
        <AlertDescription
          {...local.descriptionProps}
          class={local.classNames?.description}
        >
          {local.description}
        </AlertDescription>
      </Show>
      <Show when={local.action !== undefined}>
        <AlertAction {...local.actionProps} class={local.classNames?.action}>
          {local.action}
        </AlertAction>
      </Show>
    </AlertRoot>
  );
}
// #endregion

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
