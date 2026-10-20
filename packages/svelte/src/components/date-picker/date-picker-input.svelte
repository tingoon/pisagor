<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerInputProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerInputProps = $props();
  const part = withContext(() => rest, { name: "Input" });
</script>

<DatePickerPrimitive.Input {...part.props}>
  {@render children?.()}
</DatePickerPrimitive.Input>
