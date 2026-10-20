import { QrCode as QrCodePrimitive } from "@ark-ui/solid";
import type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodePatternProps,
  QrCodeRootProps as QrCodeRootPrimitiveProps,
} from "@ark-ui/solid";
import type { QrCodeContract, QrCodeRootContract } from "@pisagor/contracts";
import { qrCodeRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "QrCode",
  recipe: qrCodeRecipe,
});
// #endregion

// #region Types
export type QrCodeRootProps = QrCodeRootPrimitiveProps & QrCodeRootContract;

export interface QrCodeProps
  extends Omit<QrCodeRootProps, "children">, QrCodeContract {
  /** Content centered over the code (e.g. a logo). */
  overlay?: JSX.Element;
}
// #endregion

// #region Parts
const Root = withProvider<QrCodeRootProps>(QrCodePrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Frame = withContext<QrCodeFrameProps>(QrCodePrimitive.Frame, {
  name: "Frame",
});

const Pattern = withContext<QrCodePatternProps>(QrCodePrimitive.Pattern, {
  name: "Pattern",
});

const Overlay = withContext<QrCodeOverlayProps>(QrCodePrimitive.Overlay, {
  name: "Overlay",
});

const DownloadTrigger = withContext<QrCodeDownloadTriggerProps>(
  QrCodePrimitive.DownloadTrigger,
  { name: "DownloadTrigger" },
);
// #endregion

// #region Shorthand
export function QrCodeShorthand(props: QrCodeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["classNames", "overlay"]);

  return (
    <Root {...rest}>
      <Frame class={local.classNames?.frame}>
        <Pattern class={local.classNames?.pattern} />
      </Frame>

      <Show when={local.overlay !== undefined}>
        <Overlay class={local.classNames?.overlay}>{local.overlay}</Overlay>
      </Show>
    </Root>
  );
}
// #endregion

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodePatternProps,
} from "@ark-ui/solid";

export const QrCode = Object.assign(QrCodeShorthand, {
  DownloadTrigger,
  Frame,
  Overlay,
  Pattern,
  Root,
});
