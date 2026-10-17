<script module lang="ts">
  import source from "./count.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Rating } from "@pisagor/svelte";
</script>

<Rating count={3} defaultValue={3} />
