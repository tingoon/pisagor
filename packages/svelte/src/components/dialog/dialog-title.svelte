<script lang="ts">
import type { DialogTitleProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { useDialog } from "./dialog.context";

type Props = Omit<DialogTitleProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = useDialog();
</script>

<DialogPrimitive.Title {...rest} class={slots.title({ class: className })}>
  {@render children?.()}
</DialogPrimitive.Title>
