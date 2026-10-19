<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<DatePickerPrimitive.Positioner {...part.props}>
  {@render children?.()}
</DatePickerPrimitive.Positioner>
