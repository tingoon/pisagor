<script module lang="ts">
  import source from "./custom-size.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Rating } from "@pisagor/svelte";
</script>

<Rating class="**:data-[slot=rating-item-indicator]:size-8" />
