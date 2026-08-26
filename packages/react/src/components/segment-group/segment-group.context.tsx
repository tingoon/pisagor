import type { SegmentGroupVariants } from "@pisagor/styles/ui/segment-group";
import { createContext } from "../../utils";

interface SegmentGroupContextValue {
  slots: SegmentGroupVariants;
}

export const { SegmentGroupContext, useSegmentGroup } = createContext<SegmentGroupContextValue>()({
  name: "SegmentGroup",
});
