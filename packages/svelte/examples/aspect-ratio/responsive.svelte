<script module lang="ts">
  import source from "./responsive.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { AspectRatio } from "@pisagor/svelte";
</script>

<AspectRatio
  class="bg-muted rounded-xl border sm:[--ratio:16/9] md:[--ratio:1/1]"
>
  <div class="flex size-full items-center justify-center">
    <span class="text-muted-foreground text-xs select-none"> 16:9 → 1:1 </span>
  </div>
</AspectRatio>
