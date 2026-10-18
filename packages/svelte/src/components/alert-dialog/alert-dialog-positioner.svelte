<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogPositionerProps as ArkDialogPositionerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useAlertDialog } from "./alert-dialog.context";

  type Props = ArkDialogPositionerProps & { bottomStickOnMobile?: boolean };

  let {
    bottomStickOnMobile,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const { slots } = useAlertDialog();
</script>

<AlertDialogPrimitive.Positioner
  {...rest}
  class={slots.positioner({ bottomStickOnMobile, class: cn(className) })}
>
  {@render children?.()}
</AlertDialogPrimitive.Positioner>
