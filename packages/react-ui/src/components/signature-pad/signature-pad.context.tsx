import type { SignaturePadVariants } from "@pisagor/recipes/signature-pad";
import { createContext } from "../../utils";

interface SignaturePadContextValue {
  slots: SignaturePadVariants;
}

export const { SignaturePadContext, useSignaturePad } = createContext<SignaturePadContextValue>()({
  name: "SignaturePad",
});
