import { ark } from "@ark-ui/vue/factory";
import type { ToolbarProps as BaseToolbarRootProps } from "@pisagor/props";
import { type ToolbarRecipeSlot, toolbarRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
// #endregion

// #region Parts
export const ToolbarRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const ToolbarHeading = withContext(ark.div, {
  name: "Heading",
});

export const ToolbarTitle = withContext(ark.h2, {
  name: "Title",
});

export const ToolbarDescription = withContext(ark.p, {
  name: "Description",
});

export const ToolbarActions = withContext(ark.div, {
  name: "Actions",
});
// #endregion

// #region Types
type ToolbarClassNames = VariantClassNames<ToolbarRecipeSlot>;

export interface ToolbarProps extends BaseToolbarRootProps {
  actions?: VNodeChild;
  description?: VNodeChild;
  title?: VNodeChild;
  class?: unknown;
  classNames?: ToolbarClassNames;
  actionsProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  titleProps?: Record<string, unknown>;
}
// #endregion

// #region Shorthand
export const ToolbarShorthand = defineComponent({
  inheritAttrs: false,
  name: "Toolbar",
  props: {
    actions: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    actionsProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    class: { default: undefined },
    classNames: {
      default: undefined,
      type: Object as PropType<ToolbarClassNames>,
    },
    description: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    descriptionProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    title: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    titleProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const nodes: VNodeChild[] = [];
      const hasHeading =
        props.title !== undefined || props.description !== undefined;

      if (hasHeading) {
        nodes.push(
          h(ToolbarHeading, { class: props.classNames?.heading }, () => [
            props.title !== undefined
              ? h(
                  ToolbarTitle,
                  { ...props.titleProps, class: props.classNames?.title },
                  () => props.title,
                )
              : null,
            props.description !== undefined
              ? h(
                  ToolbarDescription,
                  {
                    ...props.descriptionProps,
                    class: props.classNames?.description,
                  },
                  () => props.description,
                )
              : null,
          ]),
        );
      }

      if (props.actions !== undefined) {
        nodes.push(
          h(
            ToolbarActions,
            { ...props.actionsProps, class: props.classNames?.actions },
            () => props.actions,
          ),
        );
      }

      return h(ToolbarRoot, { ...attrs, class: props.class }, () => nodes);
    };
  },
});
// #endregion

export const Toolbar = Object.assign(ToolbarShorthand, {
  Actions: ToolbarActions,
  Description: ToolbarDescription,
  Heading: ToolbarHeading,
  Root: ToolbarRoot,
  Title: ToolbarTitle,
});
