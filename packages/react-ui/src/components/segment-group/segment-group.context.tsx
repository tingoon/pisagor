import type { SegmentGroupVariants } from "@pisagor/recipes/segment-group";
import { createContext } from "../../utils";

interface SegmentGroupContextValue {
  slots: SegmentGroupVariants;
}

export const { SegmentGroupContext, useSegmentGroup } = createContext<SegmentGroupContextValue>()({
  name: "SegmentGroup",
});
