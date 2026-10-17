import source from "./disabled.tsx?raw";
import { SegmentGroup } from "@pisagor/react";

export function Disabled() {
  return (
    <SegmentGroup
      className="rounded-lg"
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

export { source as DisabledSource };
