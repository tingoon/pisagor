<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularProgress } from "@pisagor/svelte";
</script>

<CircularProgress isValueVisible value={60} />
