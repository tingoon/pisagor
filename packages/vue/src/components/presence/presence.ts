import { Presence as PresencePrimitive } from "@ark-ui/vue/presence";
import { defineComponent, h } from "vue";

// #region Part
export const Presence = defineComponent({
  inheritAttrs: false,
  name: "PisagorPresence",
  props: {
    lazyMount: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        PresencePrimitive as Parameters<typeof h>[0],
        {
          ...attrs,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});
// #endregion
