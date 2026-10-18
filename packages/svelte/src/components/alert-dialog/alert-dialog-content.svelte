<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    Portal,
    type DialogContentProps as ArkDialogContentProps,
  } from "@ark-ui/svelte";
  import type { AlertDialogRootContract } from "@pisagor/props";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import AlertDialogBackdrop from "./alert-dialog-backdrop.svelte";
  import AlertDialogPositioner from "./alert-dialog-positioner.svelte";
  import { useAlertDialog } from "./alert-dialog.context";

  const { m } = useLocale();

  type Props = ArkDialogContentProps & {
    showCloseButton?: boolean;
  } & AlertDialogRootContract;

  let {
    size = "md",
    bottomStickOnMobile = true,
    showCloseButton = false,
    children,
    class: className,
    ...rest
  }: Props = $props();

  const { slots } = useAlertDialog();
</script>

<Portal>
  <AlertDialogBackdrop />
  <AlertDialogPositioner {bottomStickOnMobile}>
    <AlertDialogPrimitive.Content
      {...rest}
      class={slots.content({ bottomStickOnMobile, class: cn(className), size })}
    >
      {@render children?.()}
      {#if showCloseButton}
        <AlertDialogPrimitive.CloseTrigger
          aria-label={m("dialog.close")}
          class={cn(
            buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(),
            slots.inline(),
          )}
          type="button"
        >
          <XIcon />
        </AlertDialogPrimitive.CloseTrigger>
      {/if}
    </AlertDialogPrimitive.Content>
  </AlertDialogPositioner>
</Portal>
