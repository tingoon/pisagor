<script lang="ts">
import { ToggleGroup } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";

const FONT_WEIGHTS = [
  { className: "font-light", label: "Light", value: "light" },
  { className: "font-normal", label: "Normal", value: "normal" },
  { className: "font-medium", label: "Medium", value: "medium" },
  { className: "font-bold", label: "Bold", value: "bold" },
] as const;

let value = $state<string[]>(["normal"]);
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-2">
    <span class="font-medium text-sm">Font weight</span>
    <ToggleGroup.Root
      class="flex-wrap"
      multiple={false}
      onValueChange={(next) => (value = Array.isArray(next) ? next : [next])}
      size="lg"
      spacing={2}
      {value}
      variant="outline"
    >
      {#each FONT_WEIGHTS as weight}
        <ToggleGroup.Item
          aria-label={`Set font weight to ${weight.label}`}
          class="size-16 flex-col gap-1 py-2"
          value={weight.value}
        >
          <span class={cn("text-lg", weight.className)}>Aa</span>
          <span class="text-muted-foreground text-xs">{weight.label}</span>
        </ToggleGroup.Item>
      {/each}
    </ToggleGroup.Root>
  </div>
</div>
