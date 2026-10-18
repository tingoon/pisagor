<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerNextTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretRightIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./calendar.context";

  const { m } = useLocale();

  let {
    class: className,
    children,
    ...rest
  }: DatePickerNextTriggerProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.NextTrigger
  aria-label={m("calendar.nextMonth")}
  {...rest}
  class={cn(
    buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
    slots.nextTrigger(),
    className,
  )}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretRightIcon aria-hidden="true" class={slots.nextIcon()} />
  {/if}
</CalendarPrimitive.NextTrigger>
