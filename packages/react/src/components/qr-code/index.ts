import { QrCodeDownload, QrCodeFrame, QrCodeOverlay, QrCodeRoot } from "./qr-code";

export type {
  QrCodeDownloadProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodeRootProps,
} from "./qr-code";

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
