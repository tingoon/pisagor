import type { SegmentGroupSlots } from "@pisagor/recipes/segment-group";
import { createContext } from "../../internal/utils";

interface SegmentGroupContextValue {
  slots: SegmentGroupSlots;
}

export const { SegmentGroupContext, useSegmentGroup } = createContext<SegmentGroupContextValue>()({
  name: "SegmentGroup",
});
