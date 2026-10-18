<script lang="ts">
  import { ToggleGroup } from "@pisagor/svelte";

  const items = [
    { content: "Bold", value: "bold" },
    { content: "Italic", value: "italic" },
    { content: "Underline", value: "underline" },
  ];
</script>

<div class="flex flex-wrap items-center gap-2">
  <ToggleGroup defaultValue={["bold"]} {items} multiple variant="ghost" />
  <ToggleGroup defaultValue={["bold"]} {items} multiple />
  <ToggleGroup defaultValue={["bold"]} {items} multiple variant="outline" />
</div>
