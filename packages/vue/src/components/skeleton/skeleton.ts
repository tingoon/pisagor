import { ark } from "@ark-ui/vue/factory";
import {
  skeletonCircleVariants,
  skeletonInlineVariants,
  skeletonTextVariants,
  skeletonVariants,
} from "@pisagor/styles/ui/skeleton";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface SkeletonTextProps {
  class?: unknown;
  lines?: number;
}

export interface SkeletonProps extends WithTestId {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const SkeletonRoot = defineComponent({
  inheritAttrs: false,
  name: "SkeletonRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(skeletonVariants(), props.class),
          "data-part": "root",
          "data-scope": "skeleton",
          "data-testid": props.testId,
        },
        slots,
      );
  },
});

export const SkeletonCircle = defineComponent({
  inheritAttrs: false,
  name: "SkeletonCircle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(ark.div as ArkPart, {
        ...attrs,
        class: cn(skeletonCircleVariants(), props.class),
        "data-part": "circle",
        "data-scope": "skeleton",
      });
  },
});

export const SkeletonText = defineComponent({
  inheritAttrs: false,
  name: "SkeletonText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    lines: { default: 2, type: Number },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(skeletonTextVariants(), props.class),
          "data-part": "text",
          "data-scope": "skeleton",
        },
        () =>
          Array.from({ length: props.lines }).map((_, index) =>
            h("div", { class: skeletonInlineVariants(), key: `skeleton-text-${index}` }),
          ),
      );
  },
});
// #endregion
