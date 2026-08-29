import type { QrCodeSlots } from "@pisagor/recipes/qr-code";
import { createContext } from "../../internal/utils";

interface QrCodeContextValue {
  slots: QrCodeSlots;
}

export const { QrCodeContext, useQrCode } = createContext<QrCodeContextValue>()({
  name: "QrCode",
});
