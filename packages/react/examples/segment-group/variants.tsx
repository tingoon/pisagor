import { SegmentGroup } from "@pisagor/react";

const items = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
  { label: "Notifications", value: "Notifications" },
];

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <SegmentGroup
        className="rounded-lg"
        defaultValue="Profile"
        items={items}
        variant="default"
      />
      <SegmentGroup defaultValue="Profile" items={items} variant="underline" />
      <SegmentGroup
        defaultValue="Profile"
        items={items}
        orientation="vertical"
        variant="underline"
      />
    </div>
  );
}
