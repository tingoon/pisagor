import { SegmentGroup } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const [value, setValue] = useState<string | null>("Profile");

  return (
    <SegmentGroup
      className="rounded-lg"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
      onValueChange={setValue}
      value={value}
    />
  );
}
