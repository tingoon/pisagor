<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<DatePickerPrimitive.Trigger {...part.props}>
  {@render children?.()}
</DatePickerPrimitive.Trigger>
