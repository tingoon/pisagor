import { QrCode as QrCodePrimitive } from "@ark-ui/react";
import type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodePatternProps,
  QrCodeRootProps as QrCodeRootPrimitiveProps,
} from "@ark-ui/react";
import type { QrCodeContract, QrCodeRootContract } from "@pisagor/contracts";
import { qrCodeRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
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
  overlay?: ReactNode;
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
export function QrCodeShorthand({ classNames, overlay, ...rest }: QrCodeProps) {
  return (
    <Root {...rest}>
      <Frame className={classNames?.frame}>
        <Pattern className={classNames?.pattern} />
      </Frame>

      {overlay !== undefined && (
        <Overlay className={classNames?.overlay}>{overlay}</Overlay>
      )}
    </Root>
  );
}
// #endregion

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodePatternProps,
} from "@ark-ui/react";

export const QrCode = Object.assign(QrCodeShorthand, {
  DownloadTrigger,
  Frame,
  Overlay,
  Pattern,
  Root,
});
