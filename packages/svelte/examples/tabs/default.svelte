<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Tabs } from "@pisagor/svelte";
</script>

<Tabs
  defaultValue="a"
  items={[
    { content: "Panel A", label: "Account", value: "a" },
    { content: "Panel B", label: "Password", value: "b" },
  ]}
/>
