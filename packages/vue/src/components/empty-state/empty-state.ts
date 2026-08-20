import { ark } from "@ark-ui/vue/factory";
import { type EmptyStateSlots, emptyStateVariants } from "@pisagor/styles/ui/empty-state";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type EmptyStateClassNames = VariantClassNames<EmptyStateSlots>;

export interface EmptyStateProps extends WithTestId {
  actions?: VNodeChild;
  class?: unknown;
  classNames?: EmptyStateClassNames;
  description?: VNodeChild;
  media?: VNodeChild;
  title?: VNodeChild;
}
// #endregion

// #region Parts
export const EmptyStateRoot = defineComponent({
  inheritAttrs: false,
  name: "EmptyStateRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<EmptyStateClassNames> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = emptyStateVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots_.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "empty-state",
          "data-testid": props.testId,
        },
        slots,
      );
    };
  },
});

function createEmptyStatePart(slot: Exclude<EmptyStateSlots, "base">, part: string) {
  return defineComponent({
    inheritAttrs: false,
    name: `EmptyState${slot.charAt(0).toUpperCase()}${slot.slice(1)}`,
    props: {
      class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
      classNames: { default: undefined, type: Object as PropType<EmptyStateClassNames> },
    },
    setup(props, { attrs, slots }) {
      const element = slot === "title" ? ark.h3 : slot === "description" ? ark.p : ark.div;

      return () => {
        const slots_ = emptyStateVariants();

        return h(
          element as ArkPart,
          {
            ...attrs,
            class: slots_[slot]({ class: cn(props.class, props.classNames?.[slot]) }),
            "data-part": part,
            "data-scope": "empty-state",
          },
          slots,
        );
      };
    },
  });
}

export const EmptyStateMedia = createEmptyStatePart("media", "media");
export const EmptyStateTitle = createEmptyStatePart("title", "title");
export const EmptyStateDescription = createEmptyStatePart("description", "description");
export const EmptyStateActions = createEmptyStatePart("actions", "actions");

export const EmptyStateShorthand = defineComponent({
  inheritAttrs: false,
  name: "EmptyStateShorthand",
  props: {
    actions: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<EmptyStateClassNames> },
    description: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    media: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
    testId: String,
    title: { default: undefined, type: [String, Object, Array] as PropType<VNodeChild> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        EmptyStateRoot,
        {
          ...attrs,
          class: props.class,
          classNames: props.classNames,
          testId: props.testId,
        },
        () => [
          props.media !== undefined && h(EmptyStateMedia, null, () => props.media),
          props.title !== undefined && h(EmptyStateTitle, null, () => props.title),
          props.description !== undefined &&
            h(EmptyStateDescription, null, () => props.description),
          props.actions !== undefined && h(EmptyStateActions, null, () => props.actions),
        ],
      );
  },
});
// #endregion
