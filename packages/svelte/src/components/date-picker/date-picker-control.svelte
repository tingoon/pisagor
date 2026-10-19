<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<DatePickerPrimitive.Control {...part.props}>
  {@render children?.()}
</DatePickerPrimitive.Control>
