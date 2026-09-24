<script lang="ts">
import { sheetRecipe } from "@pisagor/recipes/sheet";
import type { ComponentProps } from "svelte";
import DialogRoot from "../dialog/dialog-root.svelte";
import { setSheetContext } from "./sheet.context";

type Props = Omit<ComponentProps<typeof DialogRoot>, "recipe"> & {
  recipe?: typeof sheetRecipe;
};

let { recipe = sheetRecipe, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setSheetContext({
  get slots() {
    return slots;
  },
});
</script>

<DialogRoot {...rest}> {@render children?.()} </DialogRoot>
