<script lang="ts">
import { Tabs } from "@pisagor/svelte/tabs";
</script>

<Tabs
  defaultValue="a"
  items={[
  { content: "Panel A", label: "Account", value: "a" },
  { content: "Panel B", label: "Password", value: "b" },
]}
/>
