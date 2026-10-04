import type { SignaturePadRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface SignaturePadContextValue {
  slots: SignaturePadRecipe;
}

const ctx = createContext("SignaturePad")<SignaturePadContextValue>();
export const setSignaturePadContext = ctx.setContext;
