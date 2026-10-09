import { ark } from "@ark-ui/vue/factory";
import type { EmptyStateProps as BaseEmptyStateRootProps } from "@pisagor/props";
import { type EmptyStateRecipeSlot, emptyStateRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
// #endregion

// #region Parts
export const EmptyStateRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const EmptyStateMedia = withContext(ark.div, {
  name: "Media",
  slot: "media",
});

export const EmptyStateTitle = withContext(ark.h3, {
  name: "Title",
  slot: "title",
});

export const EmptyStateDescription = withContext(ark.p, {
  name: "Description",
  slot: "description",
});

export const EmptyStateActions = withContext(ark.div, {
  name: "Actions",
  slot: "actions",
});
// #endregion

// #region Types
type EmptyStateClassNames = VariantClassNames<EmptyStateRecipeSlot>;

export interface EmptyStateProps extends BaseEmptyStateRootProps {
  actions?: VNodeChild;
  description?: VNodeChild;
  media?: VNodeChild;
  title?: VNodeChild;
  class?: unknown;
  classNames?: EmptyStateClassNames;
  actionsProps?: Record<string, unknown>;
  descriptionProps?: Record<string, unknown>;
  mediaProps?: Record<string, unknown>;
  titleProps?: Record<string, unknown>;
}
// #endregion

// #region Shorthand
export const EmptyStateShorthand = defineComponent({
  inheritAttrs: false,
  name: "EmptyState",
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
      type: Object as PropType<EmptyStateClassNames>,
    },
    description: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    descriptionProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    media: {
      default: undefined,
      type: [String, Object, Array] as PropType<VNodeChild>,
    },
    mediaProps: {
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

      if (props.media !== undefined) {
        nodes.push(
          h(
            EmptyStateMedia,
            { ...props.mediaProps, class: props.classNames?.media },
            () => props.media,
          ),
        );
      }
      if (props.title !== undefined) {
        nodes.push(
          h(
            EmptyStateTitle,
            { ...props.titleProps, class: props.classNames?.title },
            () => props.title,
          ),
        );
      }
      if (props.description !== undefined) {
        nodes.push(
          h(
            EmptyStateDescription,
            {
              ...props.descriptionProps,
              class: props.classNames?.description,
            },
            () => props.description,
          ),
        );
      }
      if (props.actions !== undefined) {
        nodes.push(
          h(
            EmptyStateActions,
            { ...props.actionsProps, class: props.classNames?.actions },
            () => props.actions,
          ),
        );
      }

      return h(EmptyStateRoot, { ...attrs, class: props.class }, () => nodes);
    };
  },
});
// #endregion

export const EmptyState = Object.assign(EmptyStateShorthand, {
  Actions: EmptyStateActions,
  Description: EmptyStateDescription,
  Media: EmptyStateMedia,
  Root: EmptyStateRoot,
  Title: EmptyStateTitle,
});
