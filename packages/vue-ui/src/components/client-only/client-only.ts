import { ClientOnly as ClientOnlyPrimitive } from "@ark-ui/vue/client-only";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const ClientOnly = defineComponent({
  inheritAttrs: false,
  name: "ClientOnly",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        ClientOnlyPrimitive as ArkPart,
        { ...attrs },
        {
          default: slots.default,
          fallback: slots.fallback,
        },
      );
  },
});
// #endregion
