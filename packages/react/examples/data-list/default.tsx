import { DataList } from "@pisagor/react/data-list";

export function Default() {
  return (
    <DataList
      items={[
        { label: "New users", value: "234" },
        { label: "Sales", value: "£12,340" },
        { label: "Revenue", value: "3,450" },
      ]}
    />
  );
}
