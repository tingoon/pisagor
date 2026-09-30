import { Breadcrumb } from "../../../../../src/components/breadcrumb/index";

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
