import source from "./messages.tsx?raw";
import { Breadcrumb, Provider } from "@pisagor/solid";

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

export { source as MessagesSource };
