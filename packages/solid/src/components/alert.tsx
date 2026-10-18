import type { AlertContract, AlertRootContract } from "@pisagor/props";
import { alertRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
  createSlotRecipeContext,
} from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Alert",
  recipe: alertRecipe,
});
// #endregion

// #region Types
export type AlertRootProps = ComponentProps<"div"> & AlertRootContract;

export type AlertTitleProps = ComponentProps<"div">;

export type AlertDescriptionProps = ComponentProps<"div">;

export type AlertActionProps = ComponentProps<"div">;

export interface AlertProps
  extends Omit<AlertRootProps, "children" | "title">, AlertContract {
  action?: JSX.Element;
  description?: JSX.Element;
  icon?: JSX.Element;
  title?: JSX.Element;
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
function defaultAlertIcon(variant: string | null | undefined): JSX.Element {
  switch (variant) {
    case "destructive":
      return <WarningCircleIcon />;
    case "info":
      return <InfoIcon />;
    case "success":
      return <CheckCircleIcon />;
    case "warning":
      return <WarningIcon />;
    default:
      return null;
  }
}

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
      {"icon" in local ? local.icon : defaultAlertIcon(props.variant)}
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
