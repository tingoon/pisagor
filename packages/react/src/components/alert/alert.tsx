import { ark } from "@ark-ui/react/factory";
import { alertVariants } from "@pisagor/styles/ui/alert";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

// #region Variants

// #endregion

// #region Types
type AlertTitleProps = ComponentProps<typeof ark.div>;

type AlertDescriptionProps = ComponentProps<typeof ark.div>;

type AlertActionProps = ComponentProps<typeof ark.div>;

type AlertClassNames = VariantClassNames<typeof alertVariants>;

type AlertVariantProps = VariantProps<typeof alertVariants>;

type AlertRootProps = Omit<ComponentProps<typeof ark.div>, "title"> &
  AlertVariantProps &
  WithTestId & {
    /** Slot class names */
    classNames?: AlertClassNames;
  };

export interface AlertProps extends Omit<AlertRootProps, "children"> {
  /** Leading icon, rendered as a direct child so the grid layout aligns. */
  icon?: ReactNode;
  /** Bold title line. */
  title?: ReactNode;
  /** Description content. */
  description?: ReactNode;
  /** Trailing action area. */
  action?: ReactNode;
  /** Extra props forwarded to the alert title element */
  titleProps?: Omit<AlertTitleProps, "children" | "className">;
  /** Extra props forwarded to the alert description element */
  descriptionProps?: Omit<AlertDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the alert action element */
  actionProps?: Omit<AlertActionProps, "children" | "className">;
}

interface AlertContextValue {
  classNames?: AlertClassNames;
  slots: ReturnType<typeof alertVariants>;
}
// #endregion

// #region Context
const [AlertContext, useAlertContext] = createContext<AlertContextValue>({
  name: "Alert",
});
// #endregion

// #region Components
export function AlertRoot({
  variant,
  className,
  classNames,
  children,
  testId,
  ...rest
}: AlertRootProps) {
  const slots = alertVariants({ variant });

  return (
    <AlertContext value={{ classNames, slots }}>
      <ark.div
        {...rest}
        className={cn(slots.root(), className, classNames?.root)}
        data-part="root"
        data-scope="alert"
        data-testid={testId}
      >
        {children}
      </ark.div>
    </AlertContext>
  );
}
AlertRoot.displayName = "Alert.Root";

export function AlertTitle({ className, children, ...rest }: AlertTitleProps) {
  const { classNames, slots } = useAlertContext();

  return (
    <ark.div
      {...rest}
      className={cn(slots.title(), classNames?.title, className)}
      data-part="title"
      data-scope="alert"
    >
      {children}
    </ark.div>
  );
}
AlertTitle.displayName = "Alert.Title";

export function AlertDescription({ className, children, ...rest }: AlertDescriptionProps) {
  const { classNames, slots } = useAlertContext();

  return (
    <ark.div
      {...rest}
      className={cn(slots.description(), classNames?.description, className)}
      data-part="description"
      data-scope="alert"
    >
      {children}
    </ark.div>
  );
}
AlertDescription.displayName = "Alert.Description";

export function AlertAction({ className, children, ...rest }: AlertActionProps) {
  const { classNames, slots } = useAlertContext();

  return (
    <ark.div
      {...rest}
      className={cn(slots.action(), classNames?.action, className)}
      data-part="action"
      data-scope="alert"
    >
      {children}
    </ark.div>
  );
}
AlertAction.displayName = "Alert.Action";

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
    <AlertRoot {...rest} className={className} classNames={classNames} variant={variant}>
      {icon}

      {title !== undefined && <AlertTitle {...titleProps}>{title}</AlertTitle>}

      {description !== undefined && (
        <AlertDescription {...descriptionProps}>{description}</AlertDescription>
      )}

      {action !== undefined && <AlertAction {...actionProps}>{action}</AlertAction>}
    </AlertRoot>
  );
}
AlertShorthand.displayName = "Alert";
// #endregion
