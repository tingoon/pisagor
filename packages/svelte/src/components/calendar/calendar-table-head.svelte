<script lang="ts">
import type { DatePickerTableHeadProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";

type Props = DatePickerTableHeadProps;
let { children, ...rest }: Props = $props();
</script>

<CalendarPrimitive.TableHead {...rest}>{@render children?.()}</CalendarPrimitive.TableHead>
