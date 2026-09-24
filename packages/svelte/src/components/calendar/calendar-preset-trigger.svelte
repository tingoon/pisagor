<script lang="ts">
import type { DatePickerPresetTriggerProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";

type Props = DatePickerPresetTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<CalendarPrimitive.PresetTrigger {...rest}>{@render children?.()}</CalendarPrimitive.PresetTrigger>
