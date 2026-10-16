import { Breadcrumb, Provider } from "@pisagor/react";

export function Messages() {
  return (
    <Provider
      locale={{ locale: "tr-TR" }}
      translations={{ "breadcrumb.label": "Gezinti yolu" }}
    >
      <Breadcrumb
        items={[{ href: "#", label: "Ana sayfa" }, { label: "Ayarlar" }]}
      />
    </Provider>
  );
}
