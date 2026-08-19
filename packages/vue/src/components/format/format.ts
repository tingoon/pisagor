import {
  FormatByte as FormatBytePrimitive,
  FormatNumber as FormatNumberPrimitive,
  FormatRelativeTime as FormatRelativeTimePrimitive,
} from "@ark-ui/vue/format";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Types
// #endregion

// #region Components
export const FormatByte = defineComponent({
  inheritAttrs: false,
  name: "FormatByte",
  props: {
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h(FormatBytePrimitive as ArkPart, {
        ...attrs,
        "data-testid": props.testId,
      });
  },
});

export const FormatNumber = defineComponent({
  inheritAttrs: false,
  name: "FormatNumber",
  props: {
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h(FormatNumberPrimitive as ArkPart, {
        ...attrs,
        "data-testid": props.testId,
      });
  },
});

export const FormatRelativeTime = defineComponent({
  inheritAttrs: false,
  name: "FormatRelativeTime",
  props: {
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h(FormatRelativeTimePrimitive as ArkPart, {
        ...attrs,
        "data-testid": props.testId,
      });
  },
});
// #endregion
