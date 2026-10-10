import { SegmentGroup } from "@pisagor/react";

export function CustomIndicator() {
  return (
    <SegmentGroup
      className="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
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
