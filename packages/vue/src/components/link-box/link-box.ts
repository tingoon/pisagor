import { ark } from "@ark-ui/vue/factory";
import { linkBoxOverlayVariants, linkBoxVariants } from "@pisagor/styles/ui/link-box";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface LinkBoxRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const LinkBoxRoot = defineComponent({
  inheritAttrs: false,
  name: "LinkBoxRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
