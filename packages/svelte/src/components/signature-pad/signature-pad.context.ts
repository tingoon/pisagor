import type { SignaturePadRecipe } from "@pisagor/recipes/signature-pad";
import { createContext } from "../../utils/create-context";

interface SignaturePadContextValue {
  slots: SignaturePadRecipe;
}

const ctx = createContext<SignaturePadContextValue>({ name: "SignaturePad" });
export const setSignaturePadContext = ctx.setContext;
export const useSignaturePad = ctx.getContext;
