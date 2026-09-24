<script lang="ts">
import type { DatePickerClearTriggerProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";

type Props = DatePickerClearTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<CalendarPrimitive.ClearTrigger {...rest}>{@render children?.()}</CalendarPrimitive.ClearTrigger>
