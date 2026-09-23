import { DataList } from "..";

export function Compound() {
  return (
    <DataList.Root>
      <DataList.Item value="234">New users</DataList.Item>
      <DataList.Item value="£12,340">Sales</DataList.Item>
      <DataList.Item value="3,450">Revenue</DataList.Item>
    </DataList.Root>
  );
}
