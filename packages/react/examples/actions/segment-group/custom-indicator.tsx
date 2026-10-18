import { SegmentGroup } from "@pisagor/react";

export function CustomIndicator() {
  return (
    <SegmentGroup
      className="*:data-[slot=segment-group-indicator]:bg-primary/40 rounded-lg"
      defaultValue="Profile"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
    />
  );
}
