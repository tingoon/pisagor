import type { SignaturePadSlots } from "@pisagor/recipes/signature-pad";
import { createContext } from "../../internal/utils";

interface SignaturePadContextValue {
  slots: SignaturePadSlots;
}

export const { SignaturePadContext, useSignaturePad } = createContext<SignaturePadContextValue>()({
  name: "SignaturePad",
});
