import type { QrCodeRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface QrCodeContextValue {
  slots: QrCodeRecipe;
}

const ctx = createContext("QrCode")<QrCodeContextValue>();

export const setQrCodeContext = ctx.setContext;
export const useQrCode = ctx.getContext;
