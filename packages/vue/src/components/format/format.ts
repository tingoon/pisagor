import {
  FormatByte as FormatBytePrimitive,
  FormatNumber as FormatNumberPrimitive,
  FormatRelativeTime as FormatRelativeTimePrimitive,
} from "@ark-ui/vue/format";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const FormatByte = defineComponent({
  inheritAttrs: false,
  name: "FormatByte",
  setup(_props, { attrs }) {
    return () =>
      h(FormatBytePrimitive as ArkPart, {
        ...attrs,
      });
  },
});

export const FormatNumber = defineComponent({
  inheritAttrs: false,
  name: "FormatNumber",
  setup(_props, { attrs }) {
    return () =>
      h(FormatNumberPrimitive as ArkPart, {
        ...attrs,
      });
  },
});

export const FormatRelativeTime = defineComponent({
  inheritAttrs: false,
  name: "FormatRelativeTime",
  setup(_props, { attrs }) {
    return () =>
      h(FormatRelativeTimePrimitive as ArkPart, {
        ...attrs,
      });
  },
});
// #endregion
