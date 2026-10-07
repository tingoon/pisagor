import type { AlertProps as BaseAlertRootProps } from "@pisagor/props";
import { type AlertRecipeSlot, alertRecipe } from "@pisagor/recipes";
import type {
  ComponentProps,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import type { VariantClassNames } from "../internal/types";
import { createSlotRecipeContext } from "../utils";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Alert",
  recipe: alertRecipe,
});
// #endregion

// #region Parts
export const AlertRoot = withProvider("div", {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  Omit<HTMLAttributes<HTMLDivElement>, "title"> & BaseAlertRootProps
>;

export const AlertTitle = withContext("div", {
  name: "Title",
});

export const AlertDescription = withContext("div", {
  name: "Description",
});

export const AlertAction = withContext("div", {
  name: "Action",
});
// #endregion

// #region Types
export type AlertRootProps = ComponentProps<typeof AlertRoot>;

export type AlertTitleProps = ComponentProps<typeof AlertTitle>;

export type AlertDescriptionProps = ComponentProps<typeof AlertDescription>;

export type AlertActionProps = ComponentProps<typeof AlertAction>;

type AlertClassNames = VariantClassNames<AlertRecipeSlot>;

export interface AlertProps extends Omit<AlertRootProps, "children"> {
  /** Trailing action area. */
  action?: ReactNode;
  /** Description content. */
  description?: ReactNode;
  /** Leading icon, rendered as a direct child so the grid layout aligns. */
  icon?: ReactNode;
  /** Bold title line. */
  title?: ReactNode;
  /** Slot class names */
  classNames?: AlertClassNames;
  /** Extra props forwarded to the alert action element */
  actionProps?: Omit<AlertActionProps, "children" | "className">;
  /** Extra props forwarded to the alert description element */
  descriptionProps?: Omit<AlertDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the alert title element */
  titleProps?: Omit<AlertTitleProps, "children" | "className">;
}
// #endregion

// #region Shorthand
export function AlertShorthand({
  variant,
  action,
  actionProps,
  description,
  descriptionProps,
  icon,
  title,
  titleProps,
  className,
  classNames,
  ...rest
}: AlertProps) {
  return (
    <AlertRoot {...rest} className={className} variant={variant}>
      {icon}

      {title !== undefined && (
        <AlertTitle {...titleProps} className={classNames?.title}>
          {title}
        </AlertTitle>
      )}

      {description !== undefined && (
        <AlertDescription
          {...descriptionProps}
          className={classNames?.description}
        >
          {description}
        </AlertDescription>
      )}

      {action !== undefined && (
        <AlertAction {...actionProps} className={classNames?.action}>
          {action}
        </AlertAction>
      )}
    </AlertRoot>
  );
}

AlertShorthand.displayName = "Alert";
// #endregion

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
