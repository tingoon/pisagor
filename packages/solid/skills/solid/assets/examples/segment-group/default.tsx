/** @jsxImportSource solid-js */
import { SegmentGroup } from "@pisagor/solid/segment-group";

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
