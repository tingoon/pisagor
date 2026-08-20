import type { SignaturePadVariants } from "@pisagor/styles/ui/signature-pad";
import { createContext } from "../../utils";

interface SignaturePadContextValue {
  slots: SignaturePadVariants;
}

export const { SignaturePadContext, useSignaturePad } = createContext<SignaturePadContextValue>()({
  name: "SignaturePad",
});
