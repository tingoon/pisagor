<script lang="ts">
import type { SheetProps as BaseSheetProps } from "@pisagor/props";
import { sheetRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "svelte";
import DialogRoot from "../dialog/dialog-root.svelte";
import { Context } from "./sheet.context";

type Props = Omit<ComponentProps<typeof DialogRoot>, "recipe"> & BaseSheetProps;

let { recipe = sheetRecipe, children, ...rest }: Props = $props();
const slots = $derived(recipe());

Context.set({
  get slots() {
    return slots;
  },
});
</script>

<DialogRoot {...rest}> {@render children?.()} </DialogRoot>
