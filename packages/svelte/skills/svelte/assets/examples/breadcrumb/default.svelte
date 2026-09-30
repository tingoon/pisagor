<script lang="ts">
import { Breadcrumb } from "@pisagor/svelte/breadcrumb";
</script>

<Breadcrumb
  items={[
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { isCurrentPage: true, label: "Breadcrumb" },
]}
/>
