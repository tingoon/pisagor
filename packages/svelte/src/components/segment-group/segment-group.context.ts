import type { SegmentGroupRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface SegmentGroupContextValue {
  slots: SegmentGroupRecipe;
}

const ctx = createContext("SegmentGroup")<SegmentGroupContextValue>();

export const setSegmentGroupContext = ctx.setContext;
export const useSegmentGroup = ctx.getContext;
