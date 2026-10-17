<script module lang="ts">
  import source from "./messages.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Breadcrumb, Provider } from "@pisagor/svelte";
</script>

<Provider
  locale={{ locale: "tr-TR" }}
  translations={{ "breadcrumb.label": "Gezinti yolu" }}
>
  <Breadcrumb
    items={[{ href: "#", label: "Ana sayfa" }, { label: "Ayarlar" }]}
  />
</Provider>
