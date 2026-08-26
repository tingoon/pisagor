import { QrCode as QrCodePrimitive } from "@ark-ui/vue/qr-code";
import {
  qrCodeFrameVariants,
  qrCodeOverlayVariants,
  qrCodeVariants,
} from "@pisagor/styles/ui/qr-code";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

// #region Types
export interface QrCodeRootProps {
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
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        QrCodePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(qrCodeVariants(), props.class),
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
    return () => {
      const slots = qrCodeFrameVariants();

      return h(
        QrCodePrimitive.Frame as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: props.class }),
        },
        () =>
          h(QrCodePrimitive.Pattern as ArkPart, {
            class: slots.pattern(),
          }),
      );
    };
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
