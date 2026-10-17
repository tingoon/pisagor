import { DataList } from "@pisagor/solid";

export function Separator() {
  const data = [
    { label: "First name", value: "Jane" },
    { label: "Last name", value: "Doe" },
    { label: "Email", value: "jane.doe@example.com" },
    { label: "Phone", value: "1234567890" },
    { label: "Address", value: "1234 Main St, Anytown, USA" },
  ];
  return (
    <DataList.Root class="divide-y">
      {data.map((item) => (
        <DataList.Item value={item.value}>{item.label}</DataList.Item>
      ))}
    </DataList.Root>
  );
}
