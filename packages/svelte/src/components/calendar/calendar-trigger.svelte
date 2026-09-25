<script lang="ts">
import type { DatePickerTriggerProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";

type Props = DatePickerTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<CalendarPrimitive.Trigger {...rest}>{@render children?.()}</CalendarPrimitive.Trigger>
