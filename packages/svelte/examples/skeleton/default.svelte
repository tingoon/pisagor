<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Skeleton } from "@pisagor/svelte";
</script>

<div class="flex items-center gap-2">
  <Skeleton.Circle class="size-16" />
  <Skeleton.Text lines={3} />
</div>
