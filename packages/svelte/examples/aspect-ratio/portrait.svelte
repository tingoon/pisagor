<script module lang="ts">
  import source from "./portrait.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { AspectRatio } from "@pisagor/svelte";
</script>

<AspectRatio class="bg-muted rounded-xl border [--ratio:9/16]">
  <div class="flex size-full items-center justify-center">
    <span class="text-muted-foreground text-xs select-none">9:16</span>
  </div>
</AspectRatio>
