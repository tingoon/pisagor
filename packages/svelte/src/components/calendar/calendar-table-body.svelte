<script lang="ts">
import type { DatePickerTableBodyProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";

type Props = DatePickerTableBodyProps;
let { children, ...rest }: Props = $props();
</script>

<CalendarPrimitive.TableBody {...rest}>{@render children?.()}</CalendarPrimitive.TableBody>
