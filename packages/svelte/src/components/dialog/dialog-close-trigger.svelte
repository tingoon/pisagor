<script lang="ts">
import type { DialogCloseTriggerProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";

type Props = DialogCloseTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<DialogPrimitive.CloseTrigger {...rest}> {@render children?.()} </DialogPrimitive.CloseTrigger>
