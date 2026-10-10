<script lang="ts">
import { frameRecipe } from "@pisagor/recipes";
import { Frame } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandFrameRecipe = tv({
  extend: frameRecipe,
  slots: {
    base: "border-emerald-500/40 bg-emerald-500/5",
    panelTitle: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<Frame recipe={brandFrameRecipe}>
  <Frame.Header>
    <Frame.Title>Section header</Frame.Title>
    <Frame.Description> Brief description about the section </Frame.Description>
  </Frame.Header>
  <Frame.Panel>
    <h2 class="font-semibold text-sm">Section title</h2>
    <p class="text-muted-foreground text-sm">Section description</p>
  </Frame.Panel>
  <Frame.Footer>
    <p class="text-muted-foreground text-sm">Footer</p>
  </Frame.Footer>
</Frame>
