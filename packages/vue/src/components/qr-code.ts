import { QrCode as QrCodePrimitive } from "@ark-ui/vue";
import type { QrCodeContract, QrCodeRootContract } from "@pisagor/contracts";
import { qrCodeRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "QrCode",
  recipe: qrCodeRecipe,
});
// #endregion

// #region Types
export type QrCodeRootProps = QrCodeRootContract;

export interface QrCodeProps extends QrCodeRootProps, QrCodeContract {
  /** Content centered over the code (logo, icon); also the `overlay` slot. */
  overlay?: unknown;
}

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodePatternProps,
} from "@ark-ui/vue";
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const QrCodeRoot = withProvider<QrCodeRootContract>(
  QrCodePrimitive.Root,
  { name: "Root", slot: "base" },
);

export const QrCodeFrame = withContext(QrCodePrimitive.Frame, {
  name: "Frame",
});

export const QrCodePattern = withContext(QrCodePrimitive.Pattern, {
  name: "Pattern",
});

export const QrCodeOverlay = withContext(QrCodePrimitive.Overlay, {
  name: "Overlay",
});

export const QrCodeDownloadTrigger = withContext(
  QrCodePrimitive.DownloadTrigger,
  { name: "DownloadTrigger" },
);
// #endregion

// #region Shorthand
export const QrCodeShorthand = defineComponent({
  inheritAttrs: false,
  name: "QrCode",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<QrCodeProps["classNames"]>,
    },
    overlay: contentProp,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const overlay = slotOrProp(slots.overlay, props.overlay as never);

      return h(QrCodeRoot as ArkPart, { ...attrs }, () => [
        h(QrCodeFrame, { class: classNames?.frame }, () =>
          h(QrCodePattern, { class: classNames?.pattern }),
        ),
        overlay
          ? h(QrCodeOverlay, { class: classNames?.overlay }, overlay)
          : null,
      ]);
    };
  },
});
// #endregion

export const QrCode = Object.assign(QrCodeShorthand, {
  DownloadTrigger: QrCodeDownloadTrigger,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
  Pattern: QrCodePattern,
  Root: QrCodeRoot,
});
