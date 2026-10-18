import {
  Portal,
  Toast as ToastPrimitive,
  Toaster as ToasterPrimitive,
  createToaster,
} from "@ark-ui/react";
import type {
  CreateToasterReturn,
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToastRootProps,
  ToastTitleProps,
  ToasterProps as ToasterPrimitiveProps,
} from "@ark-ui/react";
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
  XIcon,
} from "@phosphor-icons/react";
import type {
  ToastProps as BaseToasterRootProps,
  ToastItemProps as BaseToastItemProps,
} from "@pisagor/props";
import {
  type ToastItemRecipeSlot,
  toastItemRecipe,
  toastRecipe,
} from "@pisagor/recipes";
import type {
  ComponentProps,
  CSSProperties,
  FunctionComponent,
  ReactNode,
} from "react";
import { type VariantClassNames, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { Spinner } from "./spinner";

// #region Context
const { useStyles, withProvider } = createSlotRecipeContext({
  name: "Toast",
  recipe: toastItemRecipe,
});
// #endregion

// #region Types
type ToastItemClassNames = VariantClassNames<ToastItemRecipeSlot>;

export interface ToasterRootProps
  extends
    Omit<ToasterPrimitiveProps, "toaster" | "children">,
    BaseToasterRootProps {}

export interface ToasterProps extends ToasterRootProps {
  /** Toaster instance */
  toaster?: CreateToasterReturn<ReactNode>;
}

export interface ToastItemRootProps
  extends ToastRootProps, BaseToastItemProps {}

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
  closeTriggerProps?: Omit<
    ToastCloseTriggerProps,
    "asChild" | "children" | "className"
  >;
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
        style={
          { "--width": "calc(var(--spacing) * 89)", ...style } as CSSProperties
        }
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

const ToastItemRoot = withProvider(ToastPrimitive.Root, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<ToastItemRootProps>;

function ToastItemContent({
  actionsProps,
  actionTriggerProps,
  closeTriggerProps,
  descriptionProps,
  iconProps,
  titleProps,
  toast: toastData,
  classNames,
}: Omit<ToastItemProps, keyof ToastItemRootProps> &
  Pick<ToastItemProps, "toast">) {
  const { m } = useLocale();
  const { slots } = useStyles();
  const ToastIcon = toastData.type
    ? TOAST_ICONS[toastData.type as keyof typeof TOAST_ICONS]
    : null;
  const isNotClosable = toastData.closable === false;

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
              className={slots.description({
                className: classNames?.description,
              })}
            >
              {toastData.description}
            </ToastPrimitive.Description>
          )}
        </div>
      </div>

      <div
        {...actionsProps}
        className={slots.actions({ className: classNames?.actions })}
      >
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

        {!isNotClosable && (
          <ToastPrimitive.CloseTrigger {...closeTriggerProps} asChild>
            <Button
              aria-label={m("toast.close")}
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

export type {
  ToastActionTriggerProps,
  ToastCloseTriggerProps,
  ToastDescriptionProps,
  ToastTitleProps,
} from "@ark-ui/react";

export const Toaster = Object.assign(ToasterRoot, {
  Item: ToastItem,
});
