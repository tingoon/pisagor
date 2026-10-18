<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogPositionerProps as ArkDialogPositionerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useDialog } from "./dialog.context";

  type Props = ArkDialogPositionerProps & { bottomStickOnMobile?: boolean };

  let {
    bottomStickOnMobile,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const { slots } = useDialog();
</script>

<DialogPrimitive.Positioner
  {...rest}
  class={slots.positioner({ bottomStickOnMobile, class: cn(className) })}
>
  {@render children?.()}
</DialogPrimitive.Positioner>
