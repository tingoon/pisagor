import QrCodeShorthand from "./qr-code.svelte";
import DownloadTrigger from "./qr-code-download-trigger.svelte";
import Frame from "./qr-code-frame.svelte";
import Overlay from "./qr-code-overlay.svelte";
import Pattern from "./qr-code-pattern.svelte";
import Root from "./qr-code-root.svelte";

export type {
  QrCodeDownloadTriggerProps,
  QrCodeFrameProps,
  QrCodeOverlayProps,
  QrCodePatternProps,
  QrCodeRootProps,
} from "@ark-ui/svelte";

export const QrCode = Object.assign(QrCodeShorthand, {
  DownloadTrigger,
  Frame,
  Overlay,
  Pattern,
  Root,
});
