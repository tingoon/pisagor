<script module lang="ts">
  import source from "./half-star.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Rating } from "@pisagor/svelte";
</script>

<Rating allowHalf defaultValue={3.5} />
