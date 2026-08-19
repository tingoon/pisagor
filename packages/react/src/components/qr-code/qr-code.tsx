import { QrCode as QrCodePrimitive } from "@ark-ui/react/qr-code";
import {
  qrCodeFrameVariants,
  qrCodeOverlayVariants,
  qrCodePatternVariants,
  qrCodeVariants,
} from "@pisagor/styles/ui/qr-code";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface QrCodeRootProps extends ComponentProps<typeof QrCodePrimitive.Root>, WithTestId {}
// #endregion

// #region Components
export function QrCodeRoot({ className, children, testId, ...rest }: QrCodeRootProps) {
  return (
    <QrCodePrimitive.Root
      {...rest}
      className={cn(qrCodeVariants(), className)}
      data-testid={testId}
    >
      {children ?? <QrCodeFrame />}
    </QrCodePrimitive.Root>
  );
}
QrCodeRoot.displayName = "QrCode";

export function QrCodeFrame({ className, ...rest }: ComponentProps<typeof QrCodePrimitive.Frame>) {
  return (
    <QrCodePrimitive.Frame {...rest} className={cn(qrCodeFrameVariants(), className)}>
      <QrCodePrimitive.Pattern className={qrCodePatternVariants()} />
    </QrCodePrimitive.Frame>
  );
}
QrCodeFrame.displayName = "QrCode.Frame";

export function QrCodeOverlay({
  className,
  ...rest
}: ComponentProps<typeof QrCodePrimitive.Overlay>) {
  return <QrCodePrimitive.Overlay {...rest} className={cn(qrCodeOverlayVariants(), className)} />;
}
QrCodeOverlay.displayName = "QrCode.Overlay";

export function QrCodeDownload(props: ComponentProps<typeof QrCodePrimitive.DownloadTrigger>) {
  return <QrCodePrimitive.DownloadTrigger {...props} />;
}
QrCodeDownload.displayName = "QrCode.Download";

// #endregion
