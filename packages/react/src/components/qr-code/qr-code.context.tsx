import type { QrCodeVariants } from "@pisagor/recipes/qr-code";
import { createContext } from "../../internal/utils";

interface QrCodeContextValue {
  slots: QrCodeVariants;
}

export const { QrCodeContext, useQrCode } = createContext<QrCodeContextValue>()({
  name: "QrCode",
});
