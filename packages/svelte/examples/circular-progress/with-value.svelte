<script module lang="ts">
  import source from "./with-value.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularProgress } from "@pisagor/svelte";
</script>

<CircularProgress isValueVisible size={66} thickness={5} value={66} />
