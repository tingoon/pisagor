<script lang="ts">
import type { ComponentProps } from "svelte";
import CalendarPresetTrigger from "../calendar/calendar-preset-trigger.svelte";

let props: ComponentProps<typeof CalendarPresetTrigger> = $props();
</script>

<CalendarPresetTrigger {...props} />
