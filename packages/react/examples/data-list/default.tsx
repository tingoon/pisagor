import source from "./default.tsx?raw";
import { DataList } from "@pisagor/react";

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

export { source as DefaultSource };
