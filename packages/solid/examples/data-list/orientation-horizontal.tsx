/** @jsxImportSource solid-js */
import { DataList } from "@pisagor/solid/data-list";

export function OrientationHorizontal() {
  return (
    <DataList.Root orientation="horizontal">
      <DataList.Item value="Jane">First name</DataList.Item>
      <DataList.Item value="Doe">Last name</DataList.Item>
      <DataList.Item value="jane.doe@example.com">Email</DataList.Item>
    </DataList.Root>
  );
}
