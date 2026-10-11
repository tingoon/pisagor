<script lang="ts">
import { Breadcrumb } from "@pisagor/svelte";
</script>

<Breadcrumb
  items={[
    { href: "https://example.com/", label: "Home" },
    { href: "https://example.com/docs", label: "Docs" },
    { isCurrentPage: true, label: "Breadcrumb" },
  ]}
/>
