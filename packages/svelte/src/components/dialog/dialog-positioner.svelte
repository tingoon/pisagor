<script lang="ts">
import type { DialogPositionerProps as ArkDialogPositionerProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { cn } from "@pisagor/utils";
import { useDialog } from "./dialog.context";

type Props = Omit<ArkDialogPositionerProps, "class"> & {
  bottomStickOnMobile?: boolean;
  class?: string | undefined;
};

let { bottomStickOnMobile, class: className, children, ...rest }: Props = $props();
const { slots } = useDialog();
</script>

<DialogPrimitive.Positioner
  {...rest}
  class={slots.positioner({ bottomStickOnMobile, class: cn(className) })}
>
  {@render children?.()}
</DialogPrimitive.Positioner>
