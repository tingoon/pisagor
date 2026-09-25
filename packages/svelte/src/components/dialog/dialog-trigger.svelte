<script lang="ts">
import type { DialogTriggerProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";

type Props = DialogTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<DialogPrimitive.Trigger {...rest}> {@render children?.()} </DialogPrimitive.Trigger>
