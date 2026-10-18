<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerPrevTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretLeftIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./calendar.context";

  const { m } = useLocale();

  let {
    class: className,
    children,
    ...rest
  }: DatePickerPrevTriggerProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.PrevTrigger
  aria-label={m("calendar.previousMonth")}
  {...rest}
  class={cn(
    buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
    slots.prevTrigger(),
    className,
  )}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretLeftIcon aria-hidden="true" class={slots.prevIcon()} />
  {/if}
</CalendarPrimitive.PrevTrigger>
