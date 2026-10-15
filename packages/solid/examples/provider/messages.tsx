import { Breadcrumb, Provider } from "@pisagor/solid";

export function Messages() {
  return (
    <Provider locale="tr-TR" messages={{ "breadcrumb.label": "Gezinti yolu" }}>
      <Breadcrumb
        items={[{ href: "#", label: "Ana sayfa" }, { label: "Ayarlar" }]}
      />
    </Provider>
  );
}
