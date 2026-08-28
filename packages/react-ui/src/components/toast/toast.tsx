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
import { type ToastItemSlots, toastItemVariants, toastVariants } from "@pisagor/recipes/toast";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";
import { Spinner } from "../spinner";
import { ToastItemContext, useToastItem } from "./toast.context";

// #region Types
export type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title>;
export type ToastDescriptionProps = ComponentProps<typeof ToastPrimitive.Description>;
export type ToastActionTriggerProps = ComponentProps<typeof ToastPrimitive.ActionTrigger>;
export type ToastCloseTriggerProps = ComponentProps<typeof ToastPrimitive.CloseTrigger>;

type ToastItemClassNames = VariantClassNames<ToastItemSlots>;

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
  /** Extra props forwarded to the toast actions container element */
  actionsProps?: Omit<ComponentProps<"div">, "className">;
  /** Extra props forwarded to the toast action trigger element */
  actionTriggerProps?: Omit<
    ToastActionTriggerProps,
    "asChild" | "children" | "className" | "onClick"
  >;
  /** Extra props forwarded to the toast close trigger element */
  closeTriggerProps?: Omit<ToastCloseTriggerProps, "asChild" | "children" | "className">;
  /** Extra props forwarded to the toast description element */
  descriptionProps?: Omit<ToastDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the toast icon wrapper element */
  iconProps?: Omit<ComponentProps<"div">, "className">;
  /** Extra props forwarded to the toast title element */
  titleProps?: Omit<ToastTitleProps, "children" | "className">;
  /** The toast item data */
  toast: ToastPrimitive.Options;
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
        className={toastVariants({ className })}
        style={{ "--width": "356px", ...style } as CSSProperties}
        toaster={toasterInstance}
      >
        {(toastItem) => <ToastItem toast={toastItem} />}
      </ToasterPrimitive>
    </Portal>
  );
}

const TOAST_ICONS = {
  error: <WarningCircleIcon />,
  info: <InfoIcon />,
  loading: <Spinner />,
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
} as const;

function ToastItemRoot({ children, className, ...rest }: ToastItemRootProps) {
  const slots = toastItemVariants();

  return (
    <ToastItemContext value={{ slots }}>
      <ToastPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </ToastPrimitive.Root>
    </ToastItemContext>
  );
}

function ToastItemContent({
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  descriptionProps,
  iconProps,
  titleProps,
  toast: toastData,
  classNames,
}: Omit<ToastItemProps, keyof ToastItemRootProps> & Pick<ToastItemProps, "toast">) {
  const { slots } = useToastItem();
  const ToastIcon = toastData.type ? TOAST_ICONS[toastData.type as keyof typeof TOAST_ICONS] : null;
  const isExplicitClosable = toastData.closable === false;

  return (
    <>
      <div className={slots.content({ className: classNames?.content })}>
        <div
          {...iconProps}
          className={slots.icon({ className: classNames?.icon })}
          data-part="icon"
          data-scope="toast"
        >
          {ToastIcon}
        </div>

        <div className={slots.body({ className: classNames?.body })}>
          <ToastPrimitive.Title
            {...titleProps}
            className={slots.title({ className: classNames?.title })}
          >
            {toastData.title}
          </ToastPrimitive.Title>

          {toastData.description && (
            <ToastPrimitive.Description
              {...descriptionProps}
              className={slots.description({ className: classNames?.description })}
            >
              {toastData.description}
            </ToastPrimitive.Description>
          )}
        </div>
      </div>

      <div {...actionsProps} className={slots.actions({ className: classNames?.actions })}>
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
              className={slots.close({ className: classNames?.close })}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </ToastPrimitive.CloseTrigger>
        )}
      </div>
    </>
  );
}

export function ToastItem({
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  descriptionProps,
  iconProps,
  titleProps,
  toast: toastData,
  className,
  classNames,
  ...rest
}: ToastItemProps) {
  return (
    <ToastItemRoot {...rest} className={className}>
      <ToastItemContent
        actionsProps={actionsProps}
        actionTriggerProps={actionTriggerProps}
        classNames={classNames}
        closeTriggerProps={closeTriggerProps}
        descriptionProps={descriptionProps}
        iconProps={iconProps}
        titleProps={titleProps}
        toast={toastData}
      />
    </ToastItemRoot>
  );
}
// #endregion

// #region Display Names
ToasterRoot.displayName = "Toaster";
ToastItem.displayName = "Toaster.Item";
// #endregion
