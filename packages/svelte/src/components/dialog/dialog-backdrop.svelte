<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogBackdropProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useDialog } from "./dialog.context";

  let { class: className, ...rest }: DialogBackdropProps = $props();
  const { modal, slots } = useDialog();
</script>

{#if modal}
  <DialogPrimitive.Backdrop
    {...rest}
    class={slots.backdrop({ class: cn(className) })}
  />
{/if}
