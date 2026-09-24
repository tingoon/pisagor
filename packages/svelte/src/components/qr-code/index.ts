import QrCodeDownload from "./qr-code-download.svelte";
import QrCodeFrame from "./qr-code-frame.svelte";
import QrCodeOverlay from "./qr-code-overlay.svelte";
import QrCodeRoot from "./qr-code-root.svelte";

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodeRootProps,
} from "@ark-ui/svelte/qr-code";

export const QrCode = Object.assign(QrCodeRoot, {
  Download: QrCodeDownload,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
});
