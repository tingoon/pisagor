import { DownloadTrigger as DownloadTriggerPrimitive } from "@ark-ui/vue/download-trigger";
import { defineComponent, h } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface DownloadTriggerProps extends WithTestId {
  asChild?: boolean;
  data?: unknown;
  fileName?: string;
  mimeType?: string;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const DownloadTrigger = defineComponent({
  inheritAttrs: false,
  name: "PisagorDownloadTrigger",
  props: {
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(DownloadTriggerPrimitive as ArkPart, { ...attrs, "data-testid": props.testId }, slots);
  },
});
// #endregion
