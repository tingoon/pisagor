import { QrCode as QrCodePrimitive } from "@ark-ui/vue/qr-code";
import {
  qrCodeFrameVariants,
  qrCodeOverlayVariants,
  qrCodePatternVariants,
  qrCodeVariants,
} from "@pisagor/styles/ui/qr-code";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export interface QrCodeRootProps extends WithTestId {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const QrCodeRoot = defineComponent({
  inheritAttrs: false,
  name: "QrCodeRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        QrCodePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(qrCodeVariants(), props.class),
          "data-testid": props.testId,
        },
        () => slots.default?.() ?? h(QrCodeFrame),
      );
  },
});

export const QrCodeFrame = defineComponent({
  inheritAttrs: false,
  name: "QrCodeFrame",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        QrCodePrimitive.Frame as ArkPart,
        {
          ...attrs,
          class: cn(qrCodeFrameVariants(), props.class),
        },
        () =>
          h(QrCodePrimitive.Pattern as ArkPart, {
            class: qrCodePatternVariants(),
          }),
      );
  },
});

export const QrCodeOverlay = defineComponent({
  inheritAttrs: false,
  name: "QrCodeOverlay",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        QrCodePrimitive.Overlay as ArkPart,
        {
          ...attrs,
          class: cn(qrCodeOverlayVariants(), props.class),
        },
        slots.default?.(),
      );
  },
});

export const QrCodeDownload = defineComponent({
  inheritAttrs: false,
  name: "QrCodeDownload",
  setup(_, { attrs, slots }) {
    return () => h(QrCodePrimitive.DownloadTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion
