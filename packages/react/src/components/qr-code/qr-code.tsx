import { QrCode as QrCodePrimitive } from "@ark-ui/react/qr-code";
import {
  qrCodeFrameVariants,
  qrCodeOverlayVariants,
  qrCodeVariants,
} from "@pisagor/styles/ui/qr-code";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type QrCodeRootProps = ComponentProps<typeof QrCodePrimitive.Root> & WithTestId;

export type QrCodeFrameProps = ComponentProps<typeof QrCodePrimitive.Frame>;

export type QrCodeOverlayProps = ComponentProps<typeof QrCodePrimitive.Overlay>;

export type QrCodeDownloadProps = ComponentProps<typeof QrCodePrimitive.DownloadTrigger>;
// #endregion

// #region Parts
export function QrCodeRoot({ className, children, testId, ...rest }: QrCodeRootProps) {
  return (
    <QrCodePrimitive.Root {...rest} className={qrCodeVariants({ className })} data-testid={testId}>
      {children ?? <QrCodeFrame />}
    </QrCodePrimitive.Root>
  );
}

export function QrCodeFrame({ className, ...rest }: QrCodeFrameProps) {
  const recipe = qrCodeFrameVariants();

  return (
    <QrCodePrimitive.Frame {...rest} className={recipe.base({ className })}>
      <QrCodePrimitive.Pattern className={recipe.pattern()} />
    </QrCodePrimitive.Frame>
  );
}

export function QrCodeOverlay({ className, ...rest }: QrCodeOverlayProps) {
  return <QrCodePrimitive.Overlay {...rest} className={qrCodeOverlayVariants({ className })} />;
}

export function QrCodeDownload(props: QrCodeDownloadProps) {
  return <QrCodePrimitive.DownloadTrigger {...props} />;
}
// #endregion

// #region Display Names
QrCodeRoot.displayName = "QrCode";
QrCodeFrame.displayName = "QrCode.Frame";
QrCodeOverlay.displayName = "QrCode.Overlay";
QrCodeDownload.displayName = "QrCode.Download";
// #endregion
