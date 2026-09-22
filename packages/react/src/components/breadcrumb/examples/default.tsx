import { Breadcrumb } from "..";

export function Default() {
  return (
    <Breadcrumb
      items={[
        { href: "https://example.com/", label: "Home" },
        { href: "https://example.com/", label: "Components" },
        { isCurrentPage: true, label: "Breadcrumb" },
      ]}
    />
  );
}
