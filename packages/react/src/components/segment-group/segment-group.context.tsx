import type { SegmentGroupRecipe } from "@pisagor/recipes/segment-group";
import { createContext } from "../../utils";

interface SegmentGroupContextValue {
  slots: SegmentGroupRecipe;
}

export const { SegmentGroupContext, useSegmentGroup } = createContext<SegmentGroupContextValue>()({
  name: "SegmentGroup",
});
