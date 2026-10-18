import {
  Toast as ToastPrimitive,
  Toaster as ToasterPrimitive,
  createToaster,
} from "@ark-ui/vue";
import {
  PhCheckCircle,
  PhInfo,
  PhWarning,
  PhWarningCircle,
  PhX,
} from "@phosphor-icons/vue";
import type {
  ToastItemContract,
  ToastItemRootContract,
  ToastRootContract,
} from "@pisagor/props";
import { toastItemRecipe, toastRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, Teleport } from "vue";
import { type LoosePropValue, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { Spinner } from "./spinner";

type ClassValue = Parameters<typeof cn>[0];

// #region Context
const { useStyles, withProvider } = createSlotRecipeContext({
  name: "Toast",
  recipe: toastItemRecipe,
});
// #endregion

// #region Types

type ToastType = "error" | "info" | "loading" | "success" | "warning";

type ToastAction = {
  label: string;
  onClick: () => void;
};

type ToastData = {
  type?: ToastType;
  title: string;
  description?: string;
  closable?: boolean;
  action?: ToastAction;
};

export interface ToasterProps extends ToastRootContract {
  toaster?: unknown;
  class?: ClassValue;
  style?: Record<string, unknown>;
}

export interface ToastItemProps
  extends ToastItemRootContract, ToastItemContract {
  toast: ToastData;
  class?: ClassValue;
  iconProps?: Record<string, unknown>;
  titleProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  actionsProps?: Record<string, unknown>;
  actionTriggerProps?: Record<string, unknown>;
  closeTriggerProps?: Record<string, unknown>;
}
// #endregion

// #region Constants
export const toast = createToaster({
  max: 3,
  overlap: true,
  placement: "bottom-end",
});

const TOAST_ICONS = {
  error: h(PhWarningCircle),
  info: h(PhInfo),
  loading: h(Spinner),
  success: h(PhCheckCircle),
  warning: h(PhWarning),
} as const;
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const ToasterRoot = defineComponent({
  inheritAttrs: false,
  name: "Toaster",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    recipe: {
      default: toastRecipe,
      type: Function as PropType<typeof toastRecipe>,
    },
    style: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    toaster: { default: undefined, type: Object as PropType<LoosePropValue> },
  },
  setup(props, { attrs }) {
    return () =>
      h(Teleport, { to: "body" }, [
        h(
          ToasterPrimitive as ArkPart,
          {
            ...attrs,
            class: cn(props.recipe(), props.class),
            style: { "--width": "356px", ...(props.style ?? {}) } as Record<
              string,
              unknown
            >,
            toaster: props.toaster ?? toast,
          },
          {
            default: ({ toastItem }: { toastItem: ToastData }) =>
              h(ToastItem, { toast: toastItem }),
          },
        ),
      ]);
  },
});

const ToastItemRoot = withProvider(ToastPrimitive.Root, {
  name: "Item",
  slot: "base",
});

const itemBagProps = {
  actionsProps: {
    default: undefined,
    type: Object as PropType<Record<string, unknown>>,
  },
  actionTriggerProps: {
    default: undefined,
    type: Object as PropType<Record<string, unknown>>,
  },
  classNames: {
    default: undefined,
    type: Object as PropType<ToastItemProps["classNames"]>,
  },
  closeTriggerProps: {
    default: undefined,
    type: Object as PropType<Record<string, unknown>>,
  },
  descriptionProps: {
    default: undefined,
    type: Object as PropType<Record<string, unknown>>,
  },
  iconProps: {
    default: undefined,
    type: Object as PropType<Record<string, unknown>>,
  },
  titleProps: {
    default: undefined,
    type: Object as PropType<Record<string, unknown>>,
  },
  toast: { required: true, type: Object as PropType<ToastData> },
} as const;

const ToastItemContent = defineComponent({
  name: "Toaster.ItemContent",
  props: itemBagProps,
  setup(props) {
    const { m } = useLocale();
    const styles = useStyles();

    return () => {
      const slots = styles.slots;
      const toastData = props.toast;
      const toastAction = toastData.action;
      const icon = toastData.type ? TOAST_ICONS[toastData.type] : null;

      const isExplicitClosable = toastData.closable === false;

      return [
        h(
          "div",
          {
            class: slots.content({ class: props.classNames?.content }),
            "data-part": "content",
            "data-scope": "toast",
          },
          () => [
            h(
              "div",
              {
                ...(props.iconProps ?? {}),
                class: slots.icon({ class: props.classNames?.icon }),
                "data-part": "icon",
                "data-scope": "toast",
              },
              icon ? [icon] : undefined,
            ),
            h(
              "div",
              { class: slots.body({ class: props.classNames?.body }) },
              () => [
                h(
                  ToastPrimitive.Title as ArkPart,
                  {
                    ...(props.titleProps ?? {}),
                    class: slots.title({
                      class: cn(
                        props.classNames?.title,
                        (props.titleProps as { class?: ClassValue } | undefined)
                          ?.class,
                      ),
                    }),
                  },
                  () => toastData.title,
                ),
                toastData.description
                  ? h(
                      ToastPrimitive.Description as ArkPart,
                      {
                        ...(props.descriptionProps ?? {}),
                        class: slots.description({
                          class: cn(
                            props.classNames?.description,
                            (
                              props.descriptionProps as
                                { class?: ClassValue } | undefined
                            )?.class,
                          ),
                        }),
                      },
                      () => toastData.description,
                    )
                  : null,
              ],
            ),
          ],
        ),
        h(
          "div",
          {
            ...(props.actionsProps ?? {}),
            class: slots.actions({ class: props.classNames?.actions }),
            "data-part": "actions",
            "data-scope": "toast",
          },
          () => [
            toastAction
              ? h(
                  ToastPrimitive.ActionTrigger as ArkPart,
                  {
                    ...(props.actionTriggerProps ?? {}),
                    asChild: true,
                    onClick: toastAction.onClick,
                  },
                  () =>
                    h(
                      Button as ArkPart,
                      { size: "sm", variant: "secondary" },
                      () => toastAction.label,
                    ),
                )
              : null,
            !isExplicitClosable
              ? h(
                  ToastPrimitive.CloseTrigger as ArkPart,
                  {
                    ...(props.closeTriggerProps ?? {}),
                    asChild: true,
                  },
                  () =>
                    h(
                      Button as ArkPart,
                      {
                        "aria-label": m("toast.close"),
                        class: slots.close({
                          class: props.classNames?.close,
                        }),
                        size: "icon-xs",
                        variant: "ghost",
                      },
                      () => h(PhX, { "aria-hidden": true }),
                    ),
                )
              : null,
          ],
        ),
      ];
    };
  },
});

export const ToastItem = defineComponent({
  inheritAttrs: false,
  name: "Toaster.Item",
  props: {
    ...itemBagProps,
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(ToastItemRoot, { ...attrs, class: props.class }, () =>
        h(ToastItemContent, {
          actionsProps: props.actionsProps,
          actionTriggerProps: props.actionTriggerProps,
          classNames: props.classNames,
          closeTriggerProps: props.closeTriggerProps,
          descriptionProps: props.descriptionProps,
          iconProps: props.iconProps,
          titleProps: props.titleProps,
          toast: props.toast,
        }),
      );
  },
});
// #endregion

export const Toaster = Object.assign(ToasterRoot, {
  Item: ToastItem,
});
