<script lang="ts">
import type { SheetProps as SheetSharedProps } from "@pisagor/props";
import { sheetRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "svelte";
import DialogRoot from "../dialog/dialog-root.svelte";
import { setSheetContext } from "./sheet.context";

type Props = Omit<ComponentProps<typeof DialogRoot>, "recipe"> & SheetSharedProps;

let { recipe = sheetRecipe, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setSheetContext({
  get slots() {
    return slots;
  },
});
</script>

<DialogRoot {...rest}> {@render children?.()} </DialogRoot>
