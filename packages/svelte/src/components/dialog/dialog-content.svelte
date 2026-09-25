<script lang="ts">
import type { DialogContentProps as ArkDialogContentProps } from "@ark-ui/svelte/dialog";
import { Dialog as DialogPrimitive } from "@ark-ui/svelte/dialog";
import { buttonRecipe } from "@pisagor/recipes/button";
import type { DialogVariantProps } from "@pisagor/recipes/dialog";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useDialog } from "./dialog.context";

type Props = Omit<ArkDialogContentProps, "class"> &
  DialogVariantProps & {
    bottomStickOnMobile?: boolean;
    class?: string | undefined;
    showCloseButton?: boolean;
  };

let {
  size = "md",
  bottomStickOnMobile = true,
  showCloseButton = true,
  children,
  class: className,
  ...rest
}: Props = $props();

const { slots } = useDialog();
</script>

<DialogPrimitive.Content
  {...rest}
  class={slots.content({ bottomStickOnMobile, class: cn(className), size })}
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
