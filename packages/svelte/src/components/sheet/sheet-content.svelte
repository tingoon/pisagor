<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogContentProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { SheetProps as BaseSheetProps } from "@pisagor/props";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { useSheet } from "./sheet.context";
  import SheetBackdrop from "./sheet-backdrop.svelte";
  import SheetPositioner from "./sheet-positioner.svelte";

  const { m } = useLocale();

  type Props = DialogContentProps & {
    showCloseButton?: boolean;
  } & BaseSheetProps;

  let {
    placement = "right",
    variant = "default",
    showCloseButton = true,
    children,
    class: className,
    ...rest
  }: Props = $props();

  const styles = useSheet();
  const slots = $derived(styles.slots);
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
          aria-label={m("sheet.close")}
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
  </SheetPositioner>
</Portal>
