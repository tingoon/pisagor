<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Progress } from "@pisagor/svelte";
</script>

<Progress isValueVisible label="Loading" value={60} />
