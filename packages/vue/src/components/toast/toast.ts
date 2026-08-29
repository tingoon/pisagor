import {
  createToaster,
  Toaster as ToasterPrimitive,
  Toast as ToastPrimitive,
} from "@ark-ui/vue/toast";
import { PhCheckCircle, PhInfo, PhWarning, PhWarningCircle, PhX } from "@phosphor-icons/vue";
import { type ToastItemSlots, toastItemRecipe, toastRecipe } from "@pisagor/recipes/toast";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType, Teleport } from "vue";
import type { VariantClassNames } from "../../internal/types";
import { Button } from "../button";
import { Spinner } from "../spinner";

// #region Types
type ToastItemClassNames = VariantClassNames<ToastItemSlots>;

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

export interface ToasterProps {
  toaster?: unknown;
  class?: ClassValue;
  style?: Record<string, unknown>;
}

export interface ToastItemProps {
  toast: ToastData;
  class?: ClassValue;
  classNames?: ToastItemClassNames;
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
  name: "ToasterRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    style: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    toaster: { default: undefined, type: Object as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(Teleport, { to: "body" }, () =>
        h(
          ToasterPrimitive as ArkPart,
          {
            ...attrs,
            class: cn(toastRecipe(), props.class),
            style: { "--width": "356px", ...(props.style ?? {}) } as Record<string, unknown>,
            toaster: props.toaster ?? toast,
          },
          {
            default: ({ toastItem }: { toastItem: ToastData }) =>
              h(ToastItem, { toast: toastItem }),
          },
        ),
      );
  },
});

export const ToastItem = defineComponent({
  inheritAttrs: false,
  name: "ToastItem",
  props: {
    actionsProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    actionTriggerProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToastItemClassNames> },
    closeTriggerProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    descriptionProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    iconProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    titleProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    toast: { required: true, type: Object as PropType<ToastData> },
  },
  setup(props, { attrs }) {
    return () => {
      const slots = toastItemRecipe();

      const toastData = props.toast;
      const toastAction = toastData.action;
      const icon = toastData.type ? TOAST_ICONS[toastData.type] : null;

      const isExplicitClosable = toastData.closable === false;

      return h(
        ToastPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: props.class }),
        },
        () => [
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
                () => icon,
              ),
              h("div", { class: slots.body({ class: props.classNames?.body }) }, () => [
                h(
                  ToastPrimitive.Title as ArkPart,
                  {
                    ...(props.titleProps ?? {}),
                    class: slots.title({
                      class: cn(
                        props.classNames?.title,
                        (props.titleProps as { class?: ClassValue } | undefined)?.class,
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
                            (props.descriptionProps as { class?: ClassValue } | undefined)?.class,
                          ),
                        }),
                      },
                      () => toastData.description,
                    )
                  : null,
              ]),
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
                          "aria-label": "Close",
                          class: slots.close({ class: props.classNames?.close }),
                          size: "icon-xs",
                          variant: "ghost",
                        },
                        () => h(PhX, { "aria-hidden": true }),
                      ),
                  )
                : null,
            ],
          ),
        ],
      );
    };
  },
});
// #endregion
