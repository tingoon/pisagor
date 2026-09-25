import { SegmentGroup } from "../index";

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
