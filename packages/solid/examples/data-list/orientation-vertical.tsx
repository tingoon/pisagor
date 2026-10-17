import source from "./orientation-vertical.tsx?raw";
import { DataList } from "@pisagor/solid";

export function OrientationVertical() {
  return (
    <DataList.Root orientation="vertical">
      <DataList.Item value="Jane">First name</DataList.Item>
      <DataList.Item value="Doe">Last name</DataList.Item>
      <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
    </DataList.Root>
  );
}

export { source as OrientationVerticalSource };
