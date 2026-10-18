<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    useDatePickerContext,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { XIcon } from "phosphor-svelte";
  import { useMessageResolver } from "../provider/context";

  const t = useMessageResolver();

  const api = useDatePickerContext();
  const visible = $derived(
    !(api().disabled || api().readOnly || api().value.length === 0),
  );
</script>

{#if visible}
  <DatePickerPrimitive.ClearTrigger
    aria-label={t("datePicker.clear")}
    class={buttonRecipe({ size: "icon-xs", variant: "ghost" }).base()}
    type="button"
  >
    <XIcon />
  </DatePickerPrimitive.ClearTrigger>
{/if}
