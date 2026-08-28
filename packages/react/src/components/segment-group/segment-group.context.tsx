import type { SegmentGroupVariants } from "@pisagor/recipes/segment-group";
import { createContext } from "../../internal/utils";

interface SegmentGroupContextValue {
  slots: SegmentGroupVariants;
}

export const { SegmentGroupContext, useSegmentGroup } = createContext<SegmentGroupContextValue>()({
  name: "SegmentGroup",
});
