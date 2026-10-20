import { SegmentGroup } from "@pisagor/solid";

export function CustomIndicator() {
  return (
    <SegmentGroup
      class="*:data-[slot=segment-group-indicator]:bg-primary/40 rounded-lg"
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
