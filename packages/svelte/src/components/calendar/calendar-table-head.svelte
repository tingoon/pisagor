<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerTableHeadProps,
} from "@ark-ui/svelte/date-picker";

let { children, ...rest }: DatePickerTableHeadProps = $props();
</script>

<CalendarPrimitive.TableHead {...rest}
  >{@render children?.()}</CalendarPrimitive.TableHead
>
