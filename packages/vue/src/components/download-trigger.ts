import { DownloadTrigger as DownloadTriggerPrimitive } from "@ark-ui/vue";
import { defineComponent, h } from "vue";

// #region Types
export interface DownloadTriggerProps {
  asChild?: boolean;
  data?: unknown;
  fileName?: string;
  mimeType?: string;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const DownloadTrigger = defineComponent({
  inheritAttrs: false,
  name: "PisagorDownloadTrigger",
  setup(_props, { attrs, slots }) {
    return () => h(DownloadTriggerPrimitive as ArkPart, { ...attrs }, slots);
  },
});
// #endregion
