<script module lang="ts">
  import source from "./horizontal.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Timeline } from "@pisagor/svelte";
</script>

<Timeline
  items={[{ title: "Planned" }, { title: "In progress" }, { title: "Shipped" }]}
  orientation="horizontal"
/>
