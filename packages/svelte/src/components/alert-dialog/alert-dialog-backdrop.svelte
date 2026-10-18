<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogBackdropProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useAlertDialog } from "./alert-dialog.context";

  let { class: className, ...rest }: DialogBackdropProps = $props();
  const { modal, slots } = useAlertDialog();
</script>

{#if modal}
  <AlertDialogPrimitive.Backdrop
    {...rest}
    class={slots.backdrop({ class: cn(className) })}
  />
{/if}
