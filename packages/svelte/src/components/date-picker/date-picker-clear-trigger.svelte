<script lang="ts">
import {
  DatePicker as DatePickerPrimitive,
  useDatePickerContext,
} from "@ark-ui/svelte/date-picker";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";

const api = useDatePickerContext();
const visible = $derived(!(api().disabled || api().readOnly || api().value.length === 0));
</script>

{#if visible}
  <DatePickerPrimitive.ClearTrigger
    aria-label="Clear"
    class={cn(buttonRecipe({ size: "icon-xs", variant: "ghost" }).base())}
    type="button"
  >
    <XIcon />
  </DatePickerPrimitive.ClearTrigger>
{/if}
