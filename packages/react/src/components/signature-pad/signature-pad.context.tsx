import type { SignaturePadRecipe } from "@pisagor/recipes/signature-pad";
import { createContext } from "../../internal/utils";

interface SignaturePadContextValue {
  slots: SignaturePadRecipe;
}

export const { SignaturePadContext, useSignaturePad } = createContext<SignaturePadContextValue>()({
  name: "SignaturePad",
});
