import { Breadcrumb } from "../index";

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
