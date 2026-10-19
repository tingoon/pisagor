import { SegmentGroup } from "@pisagor/solid";

export function OrientationVertical() {
  return (
    <SegmentGroup
      class="rounded-lg"
      defaultValue="Profile"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
      orientation="vertical"
    />
  );
}
