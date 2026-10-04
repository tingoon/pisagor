import type { SegmentGroupRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface SegmentGroupContextValue {
  slots: SegmentGroupRecipe;
}

export const { SegmentGroupContext, useSegmentGroup } =
  createContext("SegmentGroup")<SegmentGroupContextValue>();
