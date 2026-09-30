<script lang="ts">
import { Breadcrumb } from "../../../../../src/components/breadcrumb/index";
</script>

<Breadcrumb
  items={[
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { isCurrentPage: true, label: "Breadcrumb" },
]}
/>
