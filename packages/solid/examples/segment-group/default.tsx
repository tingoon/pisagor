import source from "./default.tsx?raw";
import { SegmentGroup } from "@pisagor/solid";

export function Default() {
  return (
    <SegmentGroup
      defaultValue="day"
      items={[
        { label: "Day", value: "day" },
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
      ]}
    />
  );
}

export { source as DefaultSource };
