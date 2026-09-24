import type { QrCodeRecipe } from "@pisagor/recipes/qr-code";
import { createContext } from "../../utils/create-context";

interface QrCodeContextValue {
  slots: QrCodeRecipe;
}

const ctx = createContext<QrCodeContextValue>({ name: "QrCode" });

export const setQrCodeContext = ctx.setContext;
export const useQrCode = ctx.getContext;
