import type { AlertProps as BaseAlertRootProps } from "@pisagor/props";
import {
  type AlertRecipeSlot,
  type AlertVariantProps,
  alertRecipe,
} from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

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
});

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
type AlertClassNames = VariantClassNames<AlertRecipeSlot>;

export interface AlertProps extends BaseAlertRootProps {
  /** Trailing action area. */
  action?: VNodeChild;
  /** Description content. */
  description?: VNodeChild;
  /** Leading icon, rendered as a direct child so the grid layout aligns. */
  icon?: VNodeChild;
  /** Bold title line. */
  title?: VNodeChild;
  /** Slot class names */
  classNames?: AlertClassNames;
  class?: unknown;
  /** Extra props forwarded to the alert action element */
  actionProps?: Record<string, unknown>;
  /** Extra props forwarded to the alert description element */
  descriptionProps?: Record<string, unknown>;
  /** Extra props forwarded to the alert title element */
  titleProps?: Record<string, unknown>;
}
// #endregion

// #region Shorthand
export const AlertShorthand = defineComponent({
  inheritAttrs: false,
  name: "Alert",
  props: {
    action: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    actionProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    class: { default: undefined },
    classNames: {
      default: undefined,
      type: Object as PropType<AlertClassNames>,
    },
    description: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    descriptionProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    icon: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    title: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    titleProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    variant: {
      default: undefined,
      type: String as PropType<AlertVariantProps["variant"]>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const nodes: VNodeChild[] = [];

      if (props.icon !== undefined) {
        nodes.push(props.icon);
      }

      if (props.title !== undefined) {
        nodes.push(
          h(
            AlertTitle,
            { ...props.titleProps, class: props.classNames?.title },
            () => props.title,
          ),
        );
      }

      if (props.description !== undefined) {
        nodes.push(
          h(
            AlertDescription,
            {
              ...props.descriptionProps,
              class: props.classNames?.description,
            },
            () => props.description,
          ),
        );
      }

      if (props.action !== undefined) {
        nodes.push(
          h(
            AlertAction,
            { ...props.actionProps, class: props.classNames?.action },
            () => props.action,
          ),
        );
      }

      return h(
        AlertRoot,
        {
          ...attrs,
          class: props.class,
          variant: props.variant,
        },
        () => nodes,
      );
    };
  },
});
// #endregion

export const Alert = Object.assign(AlertShorthand, {
  Action: AlertAction,
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
});
