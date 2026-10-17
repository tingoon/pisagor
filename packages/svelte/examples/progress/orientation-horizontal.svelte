<script module lang="ts">
  import source from "./orientation-horizontal.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Progress } from "@pisagor/svelte";
</script>

<Progress value={60} />
