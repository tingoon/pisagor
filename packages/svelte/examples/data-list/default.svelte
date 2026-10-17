<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DataList } from "@pisagor/svelte";
</script>

<DataList
  items={[
    { label: "Name", value: "Pisagor" },
    { label: "Status", value: "Active" },
  ]}
/>
