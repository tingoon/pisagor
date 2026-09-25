<script lang="ts">
import type { DialogContentProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { Portal } from "@ark-ui/svelte/portal";
import { buttonRecipe } from "@pisagor/recipes/button";
import type { SheetVariantProps } from "@pisagor/recipes/sheet";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useSheet } from "./sheet.context";
import SheetBackdrop from "./sheet-backdrop.svelte";
import SheetPositioner from "./sheet-positioner.svelte";

type Props = Omit<DialogContentProps, "class"> &
  SheetVariantProps & {
    class?: string | undefined;
    showCloseButton?: boolean;
  };

let {
  placement = "right",
  variant = "default",
  showCloseButton = true,
  children,
  class: className,
  ...rest
}: Props = $props();

const { slots } = useSheet();
</script>

<Portal>
  <SheetBackdrop />
  <SheetPositioner {placement} {variant}>
    <DialogPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(className), placement, variant })}
    >
      {@render children?.()}
      {#if showCloseButton}
        <DialogPrimitive.CloseTrigger
          aria-label="Close"
          class={cn(buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(), slots.inline())}
          type="button"
        >
          <XIcon />
        </DialogPrimitive.CloseTrigger>
      {/if}
    </DialogPrimitive.Content>
  </SheetPositioner>
</Portal>
