import { DataList } from "@pisagor/react";

export function OrientationHorizontal() {
  return (
    <DataList
      items={[
        { label: "First name", value: "Jane" },
        { label: "Last name", value: "Doe" },
        { label: "Email", value: "jane.doe@example.com" },
      ]}
      orientation="horizontal"
    />
  );
}
