<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { JsonTreeView } from "@pisagor/svelte";

  const data = { name: "Pisagor", nested: { count: 3, ok: true } };
</script>

<JsonTreeView {data} />
