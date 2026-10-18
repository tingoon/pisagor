<script lang="ts">
  import { ToggleGroup } from "@pisagor/svelte";
  import {
    TextBIcon,
    TextItalicIcon,
    TextUnderlineIcon,
  } from "phosphor-svelte";

  let value = $state(["bold"]);
</script>

<div class="flex flex-col items-center gap-2">
  <ToggleGroup.Root
    onValueChange={(next) => (value = Array.isArray(next) ? next : [next])}
    {value}
  >
    <ToggleGroup.Item aria-label="Toggle bold" value="bold">
      <TextBIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item aria-label="Toggle italic" value="italic">
      <TextItalicIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item aria-label="Toggle underline" value="underline">
      <TextUnderlineIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
  <p class="text-muted-foreground text-center text-sm">
    {value.length > 0 ? value.join(", ") : "None"}
  </p>
</div>
