<script lang="ts">
import { ToggleGroup } from "@pisagor/svelte";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];
</script>

<div class="flex flex-wrap items-center gap-2">
  <ToggleGroup defaultValue={["bold"]} {items} multiple variant="ghost" />
  <ToggleGroup defaultValue={["bold"]} {items} multiple />
  <ToggleGroup defaultValue={["bold"]} {items} multiple variant="outline" />
</div>
