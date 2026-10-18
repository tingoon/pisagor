import { SegmentGroup } from "@pisagor/react";

export function DisabledItem() {
  return (
    <SegmentGroup
      className="rounded-lg"
      defaultValue="Profile"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { disabled: true, label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
    />
  );
}
