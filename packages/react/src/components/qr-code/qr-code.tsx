import { QrCode as QrCodePrimitive } from "@ark-ui/react/qr-code";
import { qrCodeRecipe } from "@pisagor/recipes/qr-code";
import type { ComponentProps } from "react";
import { QrCodeContext, useQrCode } from "./qr-code.context";

// #region Types
export type QrCodeRootProps = ComponentProps<typeof QrCodePrimitive.Root>;

export type QrCodeFrameProps = ComponentProps<typeof QrCodePrimitive.Frame>;

export type QrCodeOverlayProps = ComponentProps<typeof QrCodePrimitive.Overlay>;

export type QrCodeDownloadProps = ComponentProps<typeof QrCodePrimitive.DownloadTrigger>;
// #endregion

// #region Parts
export function QrCodeRoot({ children, className, ...rest }: QrCodeRootProps) {
  const slots = qrCodeRecipe();

  return (
    <QrCodeContext value={{ slots }}>
      <QrCodePrimitive.Root {...rest} className={slots.base({ className })}>
        {children ?? <QrCodeFrame />}
      </QrCodePrimitive.Root>
    </QrCodeContext>
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

export function QrCodeOverlay({ className, ...rest }: QrCodeOverlayProps) {
  const { slots } = useQrCode();

  return <QrCodePrimitive.Overlay {...rest} className={slots.overlay({ className })} />;
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
