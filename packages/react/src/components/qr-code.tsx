import { QrCode as QrCodePrimitive } from "@ark-ui/react";
import type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeRootProps as QrCodeRootPrimitiveProps,
} from "@ark-ui/react";
import type { QrCodeRootContract } from "@pisagor/props";
import { qrCodeRecipe } from "@pisagor/recipes";
import type { FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "QrCode",
  recipe: qrCodeRecipe,
});
// #endregion

// #region Types
export interface QrCodeRootProps
  extends QrCodeRootPrimitiveProps, QrCodeRootContract {}

export type QrCodeDownloadProps = QrCodeDownloadTriggerProps;
// #endregion

// #region Parts
const QrCodeRootBase = withProvider(QrCodePrimitive.Root)({
  name: "Root",
  slot: "base",
}) as FunctionComponent<QrCodeRootProps>;

export function QrCodeRoot({ children, ...rest }: QrCodeRootProps) {
  return (
    <QrCodeRootBase {...rest}>{children ?? <QrCodeFrame />}</QrCodeRootBase>
  );
}

export function QrCodeFrame({ className, ...rest }: QrCodeFrameProps) {
  const { slots } = useStyles();

  return (
    <QrCodePrimitive.Frame {...rest} className={slots.frame({ className })}>
      <QrCodePrimitive.Pattern className={slots.pattern()} />
    </QrCodePrimitive.Frame>
  );
}

export const QrCodeOverlay = withContext(QrCodePrimitive.Overlay, {
  name: "Overlay",
});

export function QrCodeDownload(props: QrCodeDownloadProps) {
  return <QrCodePrimitive.DownloadTrigger {...props} />;
}
// #endregion

// #region Display Names
QrCodeRoot.displayName = "QrCode";
QrCodeFrame.displayName = "QrCode.Frame";
QrCodeDownload.displayName = "QrCode.Download";

// #endregion

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
} from "@ark-ui/react";

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
