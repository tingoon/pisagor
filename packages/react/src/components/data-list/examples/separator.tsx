import { DataList } from "..";

export function Separator() {
  const data = [
    { label: "First name", value: "Jane" },
    { label: "Last name", value: "Doe" },
    { label: "Email", value: "jane.doe@example.com" },
    { label: "Phone", value: "1234567890" },
    { label: "Address", value: "1234 Main St, Anytown, USA" },
  ];
  return (
    <DataList.Root className="divide-y">
      {data.map((item) => (
        <DataList.Item key={item.label} value={item.value}>
          {item.label}
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}
