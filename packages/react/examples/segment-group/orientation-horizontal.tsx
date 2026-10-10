import { SegmentGroup } from "@pisagor/react";

export function OrientationHorizontal() {
  return (
    <SegmentGroup
      className="rounded-lg"
      defaultValue="Profile"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
      orientation="horizontal"
    />
  );
}
