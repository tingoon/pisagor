import source from "./default.tsx?raw";
import { Breadcrumb } from "@pisagor/solid";

export function Default() {
  return (
    <Breadcrumb
      items={[
        { href: "#", label: "Home" },
        { href: "#", label: "Docs" },
        { isCurrentPage: true, label: "Breadcrumb" },
      ]}
    />
  );
}

export { source as DefaultSource };
