import { ark } from "@ark-ui/vue/factory";
import { linkBoxOverlayVariants, linkBoxVariants } from "@pisagor/styles/ui/link-box";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface LinkBoxRootProps extends WithTestId {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const LinkBoxRoot = defineComponent({
  inheritAttrs: false,
  name: "LinkBoxRoot",
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
          class: cn(linkBoxVariants(), props.class),
          "data-part": "root",
          "data-scope": "link-box",
          "data-testid": props.testId,
        },
        slots.default?.(),
      );
  },
});

export const LinkOverlayLink = defineComponent({
  inheritAttrs: false,
  name: "LinkOverlayLink",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.a as ArkPart,
        {
          ...attrs,
          class: cn(linkBoxOverlayVariants(), props.class),
          "data-part": "overlay",
          "data-scope": "link-box",
        },
        slots.default?.(),
      );
  },
});
// #endregion
