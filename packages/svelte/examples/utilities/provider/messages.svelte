<script lang="ts">
  import { Breadcrumb, Provider } from "@pisagor/svelte";
</script>

<Provider locale="tr-TR" messages={{ "breadcrumb.label": "Gezinti yolu" }}>
  <Breadcrumb
    items={[{ href: "#", label: "Ana sayfa" }, { label: "Ayarlar" }]}
  />
</Provider>
