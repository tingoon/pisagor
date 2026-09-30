import { SegmentGroup } from "../../../../../src/components/segment-group/index";

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
