<script lang="ts">
import type { DialogDescriptionProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { useDialog } from "./dialog.context";

type Props = Omit<DialogDescriptionProps, "class"> & {
  class?: string | undefined;
};
let { children, class: className, ...rest }: Props = $props();
const { slots } = useDialog();
</script>

<DialogPrimitive.Description
  {...rest}
  class={slots.description({ class: className })}
>
  {@render children?.()}
</DialogPrimitive.Description>
