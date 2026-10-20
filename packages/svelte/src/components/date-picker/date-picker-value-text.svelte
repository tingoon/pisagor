<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerValueTextProps = $props();
  const part = withContext(() => rest, { name: "ValueText" });
</script>

<DatePickerPrimitive.ValueText {...part.props}>
  {@render children?.()}
</DatePickerPrimitive.ValueText>
