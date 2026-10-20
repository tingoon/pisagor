<script lang="ts">
  import { Steps } from "@pisagor/svelte";

  const panel =
    "text-muted-foreground flex h-full items-center justify-center rounded-md border text-sm";

  const items = [1, 2, 3].map((step) => ({
    content: `Step ${step}`,
    value: `step-${step}`,
  }));
</script>

<Steps
  class="size-full"
  classNames={{ completedContent: panel, content: panel }}
  completedContent="All steps completed."
  {items}
/>
