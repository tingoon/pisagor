<script module lang="ts">
  import source from "./decorative.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Separator } from "@pisagor/svelte";
</script>

<div class="flex items-center gap-3 text-sm">
  <span>Profile</span>
  <Separator class="h-4" decorative orientation="vertical" />
  <span>Settings</span>
</div>
