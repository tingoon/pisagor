<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogRootProps,
  } from "@ark-ui/svelte";
  import type { DialogRootContract } from "@pisagor/props";
  import { dialogRecipe } from "@pisagor/recipes";
  import { setDialogContext } from "./dialog.context";

  type Props = DialogRootProps & DialogRootContract;

  let {
    modal = true,
    recipe = dialogRecipe,
    children,
    ...rest
  }: Props = $props();
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

<DialogPrimitive.Root {...rest} {modal}>
  {@render children?.()}
</DialogPrimitive.Root>
