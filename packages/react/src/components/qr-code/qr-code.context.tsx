import type { QrCodeRecipe } from "@pisagor/recipes/qr-code";
import { createContext } from "../../utils";

interface QrCodeContextValue {
  slots: QrCodeRecipe;
}

export const { QrCodeContext, useQrCode } = createContext<QrCodeContextValue>()({
  name: "QrCode",
});
