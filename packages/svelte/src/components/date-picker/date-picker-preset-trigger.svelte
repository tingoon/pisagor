<script lang="ts">
import type { ComponentProps } from "svelte";
import CalendarPresetTrigger from "../calendar/calendar-preset-trigger.svelte";

type Props = ComponentProps<typeof CalendarPresetTrigger>;
let props: Props = $props();
</script>

<CalendarPresetTrigger {...props} />
