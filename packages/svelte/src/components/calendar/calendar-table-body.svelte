<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerTableBodyProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DatePickerTableBodyProps = $props();
</script>

<CalendarPrimitive.TableBody {...rest}
  >{@render children?.()}</CalendarPrimitive.TableBody
>
