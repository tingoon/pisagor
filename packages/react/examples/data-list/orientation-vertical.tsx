import source from "./orientation-vertical.tsx?raw";
import { DataList } from "@pisagor/react";

export function OrientationVertical() {
  return (
    <DataList
      items={[
        { label: "First name", value: "Jane" },
        { label: "Last name", value: "Doe" },
        { label: "Email", value: "jane.doe@example.com" },
      ]}
      orientation="vertical"
    />
  );
}

export { source as OrientationVerticalSource };
