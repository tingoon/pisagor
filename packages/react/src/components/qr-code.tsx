import type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeRootProps as QrCodePrimitiveRootProps,
} from "@ark-ui/react/qr-code";
import { QrCode as QrCodePrimitive } from "@ark-ui/react/qr-code";
import type { QrCodeProps as BaseQrCodeRootProps } from "@pisagor/props";
import { qrCodeRecipe } from "@pisagor/recipes";
import type { FunctionComponent } from "react";
import { createSlotRecipeContext } from "../utils";

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
export interface LocalQrCodeRootProps
  extends QrCodePrimitiveRootProps,
    BaseQrCodeRootProps {}

export type QrCodeDownloadProps = QrCodeDownloadTriggerProps;
// #endregion

// #region Parts
const QrCodeRootBase = withProvider(QrCodePrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<LocalQrCodeRootProps>;

export function QrCodeRoot({ children, ...rest }: LocalQrCodeRootProps) {
  return (
    <QrCodeRootBase {...rest}>{children ?? <QrCodeFrame />}</QrCodeRootBase>
  );
}

export function QrCodeFrame({ className, ...rest }: QrCodeFrameProps) {
  const { slots } = useQrCode();

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
  QrCodeRootProps,
} from "@ark-ui/react/qr-code";

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
