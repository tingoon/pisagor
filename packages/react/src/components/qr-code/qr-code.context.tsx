import type { QrCodeRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface QrCodeContextValue {
  slots: QrCodeRecipe;
}

export const { QrCodeContext, useQrCode } =
  createContext("QrCode")<QrCodeContextValue>();
