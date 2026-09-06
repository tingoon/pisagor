import { Portal } from "@ark-ui/react/portal";
import type {
  CreateToasterReturn,
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToasterProps as ToasterPrimitiveProps,
  ToastRootProps,
  ToastTitleProps,
} from "@ark-ui/react/toast";
import {
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
import { type ToastItemRecipeSlot, toastItemRecipe, toastRecipe } from "@pisagor/recipes/toast";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";
import { Spinner } from "../spinner";
import { ToastItemContext, useToastItem } from "./toast.context";

// #region Types
type ToastItemClassNames = VariantClassNames<ToastItemRecipeSlot>;

export interface ToasterRootProps extends Omit<ToasterPrimitiveProps, "toaster" | "children"> {
  /**
   * Style recipe. Defaults to `toastRecipe` from `@pisagor/recipes/toast`.
   *
   * @defaultValue toastRecipe
   */
  recipe?: typeof toastRecipe;
}

export interface ToasterProps extends ToasterRootProps {
  /** Toaster instance */
  toaster?: CreateToasterReturn<ReactNode>;
}

export interface ToastItemRootProps extends ToastRootProps {
  /**
   * Style recipe. Defaults to `toastItemRecipe` from `@pisagor/recipes/toast`.
   *
   * @defaultValue toastItemRecipe
   */
  itemRecipe?: typeof toastItemRecipe;
}

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
  recipe = toastRecipe,
  className,
  style,
  ...rest
}: ToasterProps) {
  return (
    <Portal>
      <ToasterPrimitive
        {...rest}
        className={recipe({ className })}
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

function ToastItemRoot({
  children,
  itemRecipe = toastItemRecipe,
  className,
  ...rest
}: ToastItemRootProps) {
  const slots = itemRecipe();

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
