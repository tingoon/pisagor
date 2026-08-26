import type { QrCodeVariants } from "@pisagor/styles/ui/qr-code";
import { createContext } from "../../utils";

interface QrCodeContextValue {
  slots: QrCodeVariants;
}

export const { QrCodeContext, useQrCode } = createContext<QrCodeContextValue>()({
  name: "QrCode",
});
