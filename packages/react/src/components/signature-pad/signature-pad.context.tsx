import type { SignaturePadRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface SignaturePadContextValue {
  slots: SignaturePadRecipe;
}

export const { SignaturePadContext, useSignaturePad } =
  createContext("SignaturePad")<SignaturePadContextValue>();
