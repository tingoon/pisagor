<script lang="ts">
import {
  type DialogBackdropProps,
  Dialog as DialogPrimitive,
} from "@ark-ui/svelte/dialog";
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
