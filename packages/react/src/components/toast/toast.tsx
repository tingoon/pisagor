import { Portal } from "@ark-ui/react/portal";
import {
  type CreateToasterReturn,
  createToaster,
  Toaster as ToasterPrimitive,
  Toast as ToastPrimitive,
} from "@ark-ui/react/toast";
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
  XIcon,
} from "@phosphor-icons/react";
import { toasterVariants, toastInlineVariants, toastItemVariants } from "@pisagor/styles/ui/toast";
import { cn } from "@pisagor/utils";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";
import { Spinner } from "../spinner";

// #region Types
export type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title>;
export type ToastDescriptionProps = ComponentProps<typeof ToastPrimitive.Description>;
export type ToastActionTriggerProps = ComponentProps<typeof ToastPrimitive.ActionTrigger>;
export type ToastCloseTriggerProps = ComponentProps<typeof ToastPrimitive.CloseTrigger>;

type ToastItemClassNames = VariantClassNames<typeof toastItemVariants>;

export type ToasterRootProps = Omit<
  ComponentProps<typeof ToasterPrimitive>,
  "toaster" | "children"
>;

export interface ToasterProps extends ToasterRootProps {
  /** Toaster instance */
  toaster?: CreateToasterReturn<ReactNode>;
}

export type ToastItemRootProps = ComponentProps<typeof ToastPrimitive.Root>;

export interface ToastItemProps extends ToastItemRootProps {
  /** Slot class names */
  classNames?: ToastItemClassNames;
  /** The toast item data */
  toast: ToastPrimitive.Options;
  /** Extra props forwarded to the toast icon wrapper element */
  iconProps?: Omit<ComponentProps<"div">, "className">;
  /** Extra props forwarded to the toast title element */
  titleProps?: Omit<ToastTitleProps, "children" | "className">;
  /** Extra props forwarded to the toast description element */
  descriptionProps?: Omit<ToastDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the toast actions container element */
  actionsProps?: Omit<ComponentProps<"div">, "className">;
  /** Extra props forwarded to the toast action trigger element */
  actionTriggerProps?: Omit<
    ToastActionTriggerProps,
    "asChild" | "children" | "className" | "onClick"
  >;
  /** Extra props forwarded to the toast close trigger element */
  closeTriggerProps?: Omit<ToastCloseTriggerProps, "asChild" | "children" | "className">;
}
// #endregion

// #region Parts
export const toast = createToaster({
  max: 3,
  overlap: true,
  placement: "bottom-end",
});

export function ToasterRoot({
  toaster: toasterInstance = toast,
  className,
  style,
  ...rest
}: ToasterProps) {
  return (
    <Portal>
      <ToasterPrimitive
        {...rest}
        className={cn(toasterVariants(), className)}
        style={{ "--width": "356px", ...style } as CSSProperties}
        toaster={toasterInstance}
      >
        {(toastItem) => <ToastItem toast={toastItem} />}
      </ToasterPrimitive>
    </Portal>
  );
}

ToasterRoot.displayName = "Toaster";

const TOAST_ICONS = {
  error: <WarningCircleIcon />,
  info: <InfoIcon />,
  loading: <Spinner />,
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
} as const;

export function ToastItem({
  toast: toastData,
  className,
  classNames,
  iconProps,
  titleProps,
  descriptionProps,
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  ...rest
}: ToastItemProps) {
  const slots = toastItemVariants();
  const ToastIcon = toastData.type ? TOAST_ICONS[toastData.type as keyof typeof TOAST_ICONS] : null;
  const isExplicitClosable = toastData.closable === false;

  return (
    <ToastPrimitive.Root {...rest} className={cn(slots.root(), className, classNames?.root)}>
      <div className={cn(slots.content(), classNames?.content)}>
        <div
          {...iconProps}
          className={cn(slots.icon(), classNames?.icon)}
          data-part="icon"
          data-scope="toast"
        >
          {ToastIcon}
        </div>

        <div className={cn(slots.body(), classNames?.body)}>
          <ToastPrimitive.Title {...titleProps} className={cn(slots.title(), classNames?.title)}>
            {toastData.title}
          </ToastPrimitive.Title>

          {toastData.description && (
            <ToastPrimitive.Description
              {...descriptionProps}
              className={cn(slots.description(), classNames?.description)}
            >
              {toastData.description}
            </ToastPrimitive.Description>
          )}
        </div>
      </div>

      <div {...actionsProps} className={cn(slots.actions(), classNames?.actions)}>
        {toastData.action && (
          <ToastPrimitive.ActionTrigger
            {...actionTriggerProps}
            asChild
            onClick={toastData.action.onClick}
          >
            <Button size="sm" variant="secondary">
              {toastData.action.label}
            </Button>
          </ToastPrimitive.ActionTrigger>
        )}

        {!isExplicitClosable && (
          <ToastPrimitive.CloseTrigger {...closeTriggerProps} asChild>
            <Button
              aria-label="Close"
              className={toastInlineVariants()}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </ToastPrimitive.CloseTrigger>
        )}
      </div>
    </ToastPrimitive.Root>
  );
}

ToastItem.displayName = "Toaster.Item";
// #endregion
