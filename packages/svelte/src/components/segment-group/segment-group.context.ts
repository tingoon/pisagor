import type { SegmentGroupRecipe } from "@pisagor/recipes/segment-group";
import { createContext } from "../../utils/create-context";

interface SegmentGroupContextValue {
  slots: SegmentGroupRecipe;
}

const ctx = createContext<SegmentGroupContextValue>({ name: "SegmentGroup" });

export const setSegmentGroupContext = ctx.setContext;
export const useSegmentGroup = ctx.getContext;
