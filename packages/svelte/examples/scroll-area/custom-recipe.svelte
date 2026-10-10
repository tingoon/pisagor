<script lang="ts">
import { scrollAreaRecipe } from "@pisagor/recipes";
import { ScrollArea, Separator } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandScrollAreaRecipe = tv({
  extend: scrollAreaRecipe,
  slots: { thumb: "bg-emerald-600/40" },
  variants: {},
});

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
</script>

<ScrollArea class="h-64 w-48 rounded-md border" recipe={brandScrollAreaRecipe}>
  <div class="p-4">
    <h4 class="mb-4 font-medium text-sm leading-none">Tags</h4>
    {#each tags as tag (tag)}
      <div class="text-sm">{tag}</div>
      <Separator class="my-2" />
    {/each}
  </div>
</ScrollArea>
