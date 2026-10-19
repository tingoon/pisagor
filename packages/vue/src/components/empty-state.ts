import { ark } from "@ark-ui/vue";
import type {
  EmptyStateContract,
  EmptyStateRootContract,
} from "@pisagor/contracts";
import { emptyStateRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
// #endregion

// #region Parts
export const EmptyStateRoot = withProvider<EmptyStateRootContract>(ark.div, {
  name: "Root",
});

export const EmptyStateMedia = withContext("div", { name: "Media" });

export const EmptyStateTitle = withContext(ark.h3, { name: "Title" });

export const EmptyStateDescription = withContext("p", { name: "Description" });

export const EmptyStateActions = withContext("div", { name: "Actions" });
// #endregion

// #region Types
export interface EmptyStateProps
  extends EmptyStateRootContract, EmptyStateContract {
  actions?: VNodeChild;
  description?: VNodeChild;
  media?: VNodeChild;
  title?: VNodeChild;
  class?: unknown;
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
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<EmptyStateProps["classNames"]>,
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
