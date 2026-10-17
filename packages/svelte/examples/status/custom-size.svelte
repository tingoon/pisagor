<script module lang="ts">
  import source from "./custom-size.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Status } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Status class="size-4" variant="success" />
  <Status class="size-6" variant="info" />
  <Status class="size-8" variant="warning" />
</div>
