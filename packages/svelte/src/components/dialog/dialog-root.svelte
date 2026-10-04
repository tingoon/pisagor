<script lang="ts">
import type { DialogRootProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import type { DialogProps as DialogSharedProps } from "@pisagor/props";
import { dialogRecipe } from "@pisagor/recipes";
import { setDialogContext } from "./dialog.context";

type Props = DialogRootProps & DialogSharedProps;

let { modal = true, recipe = dialogRecipe, children, ...rest }: Props = $props();
const slots = $derived(recipe());

setDialogContext({
  get modal() {
    return modal;
  },
  get slots() {
    return slots;
  },
});
</script>

<DialogPrimitive.Root {...rest} {modal}> {@render children?.()} </DialogPrimitive.Root>
