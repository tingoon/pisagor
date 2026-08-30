import { QrCodeDownload, QrCodeFrame, QrCodeOverlay, QrCodeRoot } from "./qr-code";

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodeRootProps,
} from "@ark-ui/react/qr-code";

export type { QrCodeDownloadProps } from "./qr-code";

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
