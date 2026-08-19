import { ark } from "@ark-ui/vue/factory";
import { alertVariants } from "@pisagor/styles/ui/alert";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType, toValue, type VNodeChild } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

// #region Types
type AlertClassNames = VariantClassNames<typeof alertVariants>;

type AlertVariant = "default" | "destructive" | "info" | "success" | "warning";

export interface AlertProps extends WithTestId {
  action?: VNodeChild;
  actionProps?: Record<string, unknown>;
  class?: unknown;
  classNames?: AlertClassNames;
  description?: VNodeChild;
  descriptionProps?: Record<string, unknown>;
  icon?: VNodeChild;
  title?: VNodeChild;
  titleProps?: Record<string, unknown>;
  variant?: AlertVariant;
}

interface AlertContextValue {
  classNames?: AlertClassNames;
  slots: ReturnType<typeof alertVariants>;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Context
const [provideAlertContext, , useAlertContextRef] = createContext<AlertContextValue>({
  name: "Alert",
});
// #endregion

// #region Components
export const AlertRoot = defineComponent({
  inheritAttrs: false,
  name: "AlertRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<AlertClassNames> },
    testId: String,
    variant: { default: undefined, type: String as PropType<AlertVariant> },
  },
  setup(props, { attrs, slots }) {
    const contextValue = computed(() => ({
      classNames: props.classNames,
      slots: alertVariants({ variant: props.variant }),
    }));

    provideAlertContext(contextValue);

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(contextValue.value.slots.root(), props.class, props.classNames?.root),
          "data-part": "root",
          "data-scope": "alert",
          "data-testid": props.testId,
        },
        slots,
      );
  },
});

export const AlertTitle = defineComponent({
  inheritAttrs: false,
  name: "AlertTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const contextRef = useAlertContextRef();

    return () => {
      const contextValue = toValue(contextRef);
      if (!contextValue) {
        return null;
      }

      const { classNames, slots: variantSlots } = contextValue;

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.title(), classNames?.title, props.class),
          "data-part": "title",
          "data-scope": "alert",
        },
        slots,
      );
    };
  },
});

export const AlertDescription = defineComponent({
  inheritAttrs: false,
  name: "AlertDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const contextRef = useAlertContextRef();

    return () => {
      const contextValue = toValue(contextRef);
      if (!contextValue) {
        return null;
      }

      const { classNames, slots: variantSlots } = contextValue;

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.description(), classNames?.description, props.class),
          "data-part": "description",
          "data-scope": "alert",
        },
        slots,
      );
    };
  },
});

export const AlertAction = defineComponent({
  inheritAttrs: false,
  name: "AlertAction",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const contextRef = useAlertContextRef();

    return () => {
      const contextValue = toValue(contextRef);
      if (!contextValue) {
        return null;
      }

      const { classNames, slots: variantSlots } = contextValue;

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.action(), classNames?.action, props.class),
          "data-part": "action",
          "data-scope": "alert",
        },
        slots,
      );
    };
  },
});

export const AlertShorthand = defineComponent({
  inheritAttrs: false,
  name: "AlertShorthand",
  props: {
    action: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    actionProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<AlertClassNames> },
    description: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    descriptionProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    icon: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    testId: String,
    title: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    titleProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    variant: { default: undefined, type: String as PropType<AlertVariant> },
  },
  setup(props, { attrs }) {
    return () => {
      const nodes: VNodeChild[] = [];

      if (props.icon !== undefined) {
        nodes.push(props.icon);
      }

      if (props.title !== undefined) {
        nodes.push(h(AlertTitle, props.titleProps, () => props.title));
      }

      if (props.description !== undefined) {
        nodes.push(h(AlertDescription, props.descriptionProps, () => props.description));
      }

      if (props.action !== undefined) {
        nodes.push(h(AlertAction, props.actionProps, () => props.action));
      }

      return h(
        AlertRoot,
        {
          ...attrs,
          class: props.class,
          classNames: props.classNames,
          testId: props.testId,
          variant: props.variant,
        },
        () => nodes,
      );
    };
  },
});
// #endregion
