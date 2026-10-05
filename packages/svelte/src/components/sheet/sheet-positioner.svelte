<script lang="ts">
import {
  type DialogPositionerProps,
  Dialog as DialogPrimitive,
} from "@ark-ui/svelte/dialog";
import type { SheetProps as BaseSheetProps } from "@pisagor/props";
import { cn } from "@pisagor/utils";
import { useSheet } from "./sheet.context";

type Props = DialogPositionerProps & BaseSheetProps;

let {
  placement,
  variant = "default",
  class: className,
  children,
  ...rest
}: Props = $props();
const { slots } = useSheet();
</script>

<DialogPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className), placement, variant })}
>
  {@render children?.()}
</DialogPrimitive.Positioner>
