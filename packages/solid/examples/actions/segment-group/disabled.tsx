import { SegmentGroup } from "@pisagor/solid";

export function Disabled() {
  return (
    <SegmentGroup
      class="rounded-lg"
      defaultValue="Profile"
      disabled
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
    />
  );
}
