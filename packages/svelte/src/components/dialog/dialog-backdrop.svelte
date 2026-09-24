<script lang="ts">
import type { DialogBackdropProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { cn } from "@pisagor/utils";
import { useDialog } from "./dialog.context";

type Props = Omit<DialogBackdropProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { modal, slots } = useDialog();
</script>

{#if modal}
  <DialogPrimitive.Backdrop {...rest} class={slots.backdrop({ class: cn(className) })} />
{/if}
