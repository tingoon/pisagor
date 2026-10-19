import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import type { AlertContract, AlertRootContract } from "@pisagor/contracts";
import { alertRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

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
  action?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
  /** Extra props forwarded to the alert action element */
  actionProps?: Omit<AlertActionProps, "children" | "className">;
  /** Extra props forwarded to the alert description element */
  descriptionProps?: Omit<AlertDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the alert title element */
  titleProps?: Omit<AlertTitleProps, "children" | "className">;
}
// #endregion

// #region Parts
export const AlertRoot = withProvider<AlertRootProps>("div", { name: "Root" });

export const AlertTitle = withContext<AlertTitleProps>("div", {
  name: "Title",
});

export const AlertDescription = withContext<AlertDescriptionProps>("div", {
  name: "Description",
});

export const AlertAction = withContext<AlertActionProps>("div", {
  name: "Action",
});
// #endregion

// #region Shorthand
const DEFAULT_ICONS: Record<string, ReactNode> = {
  destructive: <WarningCircleIcon />,
  info: <InfoIcon />,
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
};

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
      {icon === undefined ? DEFAULT_ICONS[variant ?? "default"] : icon}

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
// #endregion

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
