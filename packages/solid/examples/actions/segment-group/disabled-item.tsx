import { SegmentGroup } from "@pisagor/solid";

export function DisabledItem() {
  return (
    <SegmentGroup
      class="rounded-lg"
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
