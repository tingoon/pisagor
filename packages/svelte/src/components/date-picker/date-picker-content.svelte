<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerContentProps,
  } from "@ark-ui/svelte";
  import CalendarDefaultView from "../calendar/calendar-default-view.svelte";
  import { withContext } from "./date-picker.context";

  let { children, ...rest }: DatePickerContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<DatePickerPrimitive.Content {...part.props}>
  <!-- Svelte Ark needs a view context for calendar parts; explicit views override. -->
  <CalendarDefaultView>
    {@render children?.()}
  </CalendarDefaultView>
</DatePickerPrimitive.Content>
