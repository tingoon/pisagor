import { DataList } from "..";

export function OrientationVertical() {
  return (
    <DataList.Root orientation="vertical">
      <DataList.Item value="Jane">First name</DataList.Item>
      <DataList.Item value="Doe">Last name</DataList.Item>
      <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
    </DataList.Root>
  );
}
