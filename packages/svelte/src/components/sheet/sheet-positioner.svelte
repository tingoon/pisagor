<script lang="ts">
import type { DialogPositionerProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import type { SheetVariantProps } from "@pisagor/recipes/sheet";
import { cn } from "@pisagor/utils";
import { useSheet } from "./sheet.context";

type Props = Omit<DialogPositionerProps, "class"> &
  SheetVariantProps & {
    class?: string | undefined;
  };

let { placement, variant = "default", class: className, children, ...rest }: Props = $props();
const { slots } = useSheet();
</script>

<DialogPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className), placement, variant })}
>
  {@render children?.()}
</DialogPrimitive.Positioner>
