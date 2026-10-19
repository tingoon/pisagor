<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerClearTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerClearTriggerProps = $props();
  const part = withContext(() => rest, { name: "ClearTrigger" });
</script>

<DatePickerPrimitive.ClearTrigger {...part.props}>
  {@render children?.()}
</DatePickerPrimitive.ClearTrigger>
