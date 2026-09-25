<script lang="ts">
import type { DialogRootProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { dialogRecipe } from "@pisagor/recipes/dialog";
import { setDialogContext } from "./dialog.context";

type Props = DialogRootProps & { recipe?: typeof dialogRecipe };

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
