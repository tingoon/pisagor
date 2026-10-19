<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogContentProps as ArkDialogContentProps,
  } from "@ark-ui/svelte";
  import type { DialogRootContract } from "@pisagor/contracts";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { useDialog } from "./dialog.context";

  const { m } = useLocale();

  type Props = ArkDialogContentProps & {
    showCloseButton?: boolean;
  } & DialogRootContract;

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
      aria-label={m("dialog.close")}
      class={cn(
        buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(),
        slots.inline(),
      )}
      type="button"
    >
      <XIcon />
    </DialogPrimitive.CloseTrigger>
  {/if}
</DialogPrimitive.Content>
