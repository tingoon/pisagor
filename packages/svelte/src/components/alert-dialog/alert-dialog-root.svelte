<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogRootProps,
  } from "@ark-ui/svelte";
  import type { AlertDialogProps as BaseAlertDialogProps } from "@pisagor/props";
  import { alertDialogRecipe } from "@pisagor/recipes";
  import { setAlertDialogContext } from "./alert-dialog.context";

  type Props = DialogRootProps & BaseAlertDialogProps;

  let {
    modal = true,
    recipe = alertDialogRecipe,
    role = "alertdialog",
    children,
    ...rest
  }: Props = $props();
  const slots = $derived(recipe());

  setAlertDialogContext({
    get modal() {
      return modal;
    },
    get slots() {
      return slots;
    },
  });
</script>

<AlertDialogPrimitive.Root {...rest} {modal} {role}>
  {@render children?.()}
</AlertDialogPrimitive.Root>
