import { ark } from "@ark-ui/react/factory";
import { type AlertSlots, type AlertVariantProps, alertVariants } from "@pisagor/recipes/alert";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { AlertContext, useAlert } from "./alert.context";

// #region Types
type AlertTitleProps = ComponentProps<typeof ark.div>;

type AlertDescriptionProps = ComponentProps<typeof ark.div>;

type AlertActionProps = ComponentProps<typeof ark.div>;

type AlertClassNames = VariantClassNames<AlertSlots>;

type AlertRootProps = Omit<ComponentProps<typeof ark.div>, "title"> & AlertVariantProps;

export interface AlertProps extends Omit<AlertRootProps, "children"> {
  /** Leading icon, rendered as a direct child so the grid layout aligns. */
  icon?: ReactNode;
  /** Bold title line. */
  title?: ReactNode;
  /** Description content. */
  description?: ReactNode;
  /** Trailing action area. */
  action?: ReactNode;
  /** Slot class names */
  classNames?: AlertClassNames;
  /** Extra props forwarded to the alert title element */
  titleProps?: Omit<AlertTitleProps, "children" | "className">;
  /** Extra props forwarded to the alert description element */
  descriptionProps?: Omit<AlertDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the alert action element */
  actionProps?: Omit<AlertActionProps, "children" | "className">;
}
// #endregion

// #region Parts
export function AlertRoot({ variant, className, children, ...rest }: AlertRootProps) {
  const slots = alertVariants({ variant });

  return (
    <AlertContext value={{ slots }}>
      <ark.div {...rest} className={slots.base({ className })} data-part="root" data-scope="alert">
        {children}
      </ark.div>
    </AlertContext>
  );
}

export function AlertTitle({ className, children, ...rest }: AlertTitleProps) {
  const { slots } = useAlert();

  return (
    <ark.div {...rest} className={slots.title({ className })} data-part="title" data-scope="alert">
      {children}
    </ark.div>
  );
}

export function AlertDescription({ className, children, ...rest }: AlertDescriptionProps) {
  const { slots } = useAlert();

  return (
    <ark.div
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="alert"
    >
      {children}
    </ark.div>
  );
}

export function AlertAction({ className, children, ...rest }: AlertActionProps) {
  const { slots } = useAlert();

  return (
    <ark.div
      {...rest}
      className={slots.action({ className })}
      data-part="action"
      data-scope="alert"
    >
      {children}
    </ark.div>
  );
}
// #endregion

// #region Shorthand
export function AlertShorthand({
  variant,
  className,
  classNames,
  icon,
  title,
  description,
  action,
  titleProps,
  descriptionProps,
  actionProps,
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
        <AlertDescription {...descriptionProps} className={classNames?.description}>
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

// #region Display Names
AlertRoot.displayName = "Alert.Root";
AlertTitle.displayName = "Alert.Title";
AlertDescription.displayName = "Alert.Description";
AlertAction.displayName = "Alert.Action";
AlertShorthand.displayName = "Alert";
// #endregion
