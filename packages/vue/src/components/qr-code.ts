import { QrCode as QrCodePrimitive } from "@ark-ui/vue/qr-code";
import type { QrCodeProps as BaseQrCodeRootProps } from "@pisagor/props";
import { qrCodeRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useQrCode,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "QrCode",
  recipe: qrCodeRecipe,
});
// #endregion

// #region Types
export interface QrCodeRootProps extends BaseQrCodeRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const QrCodeRootBase = withProvider(QrCodePrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const QrCodeRoot = defineComponent({
  inheritAttrs: false,
  name: "QrCode",
  setup(_props, { attrs, slots }) {
    return () =>
      h(
        QrCodeRootBase,
        { ...attrs },
        {
          default: () => slots.default?.() ?? h(QrCodeFrame),
        },
      );
  },
});

export const QrCodeFrame = defineComponent({
  inheritAttrs: false,
  name: "QrCode.Frame",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs }) {
    const styles = useQrCode();

    return () =>
      h(
        QrCodePrimitive.Frame as ArkPart,
        { ...attrs, class: styles.slots.frame({ class: props.class }) },
        () =>
          h(QrCodePrimitive.Pattern as ArkPart, {
            class: styles.slots.pattern(),
          }),
      );
  },
});

export const QrCodeOverlay = withContext(QrCodePrimitive.Overlay, {
  name: "Overlay",
});

export const QrCodeDownload = defineComponent({
  inheritAttrs: false,
  name: "QrCode.Download",
  setup(_props, { attrs, slots }) {
    return () =>
      h(QrCodePrimitive.DownloadTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
