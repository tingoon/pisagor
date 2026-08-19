import { ark } from "@ark-ui/vue/factory";
import { toolbarVariants } from "@pisagor/styles/ui/toolbar";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";

type ToolbarClassNames = VariantClassNames<typeof toolbarVariants>;

// #region Types
export interface ToolbarProps extends Omit<WithTestId, "testId">, WithTestId {
  class?: unknown;
  classNames?: ToolbarClassNames;
  title?: VNodeChild;
  description?: VNodeChild;
  actions?: VNodeChild;
  titleProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  actionsProps?: Record<string, unknown>;
}

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const ToolbarRoot = defineComponent({
  inheritAttrs: false,
  name: "ToolbarRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToolbarClassNames> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(toolbarVariants().root(), props.class, props.classNames?.root),
          "data-part": "root",
          "data-scope": "toolbar",
          "data-testid": props.testId,
        },
        slots,
      );
  },
});

export const ToolbarHeading = defineComponent({
  inheritAttrs: false,
  name: "ToolbarHeading",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToolbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    const slotsClasses = toolbarVariants();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(slotsClasses.heading(), props.class, props.classNames?.heading),
          "data-part": "heading",
          "data-scope": "toolbar",
        },
        slots,
      );
  },
});

export const ToolbarTitle = defineComponent({
  inheritAttrs: false,
  name: "ToolbarTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToolbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    const slotsClasses = toolbarVariants();

    return () =>
      h(
        ark.h2 as ArkPart,
        {
          ...attrs,
          class: cn(slotsClasses.title(), props.class, props.classNames?.title),
          "data-part": "title",
          "data-scope": "toolbar",
        },
        slots,
      );
  },
});

export const ToolbarDescription = defineComponent({
  inheritAttrs: false,
  name: "ToolbarDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToolbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    const slotsClasses = toolbarVariants();

    return () =>
      h(
        ark.p as ArkPart,
        {
          ...attrs,
          class: cn(slotsClasses.description(), props.class, props.classNames?.description),
          "data-part": "description",
          "data-scope": "toolbar",
        },
        slots,
      );
  },
});

export const ToolbarActions = defineComponent({
  inheritAttrs: false,
  name: "ToolbarActions",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToolbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    const slotsClasses = toolbarVariants();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(slotsClasses.actions(), props.class, props.classNames?.actions),
          "data-part": "actions",
          "data-scope": "toolbar",
        },
        slots,
      );
  },
});

export const ToolbarShorthand = defineComponent({
  inheritAttrs: false,
  name: "ToolbarShorthand",
  props: {
    actions: {
      default: undefined,
      type: [String, Object, Array, Function] as PropType<VNodeChild>,
    },
    actionsProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<ToolbarClassNames> },
    description: {
      default: undefined,
      type: [String, Object, Array, Function] as PropType<VNodeChild>,
    },
    descriptionProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    testId: String,
    title: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    titleProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props, { attrs }) {
    return () => {
      const hasHeading = props.title !== undefined || props.description !== undefined;

      const nodes: VNodeChild[] = [];

      if (hasHeading) {
        nodes.push(
          h(ToolbarHeading, null, () => [
            props.title !== undefined ? h(ToolbarTitle, props.titleProps, () => props.title) : null,
            props.description !== undefined
              ? h(ToolbarDescription, props.descriptionProps, () => props.description)
              : null,
          ]),
        );
      }

      if (props.actions !== undefined) {
        nodes.push(h(ToolbarActions, props.actionsProps, () => props.actions));
      }

      return h(
        ToolbarRoot,
        {
          ...attrs,
          class: props.class,
          classNames: props.classNames,
          testId: props.testId,
        },
        () => nodes,
      );
    };
  },
});

// #endregion
