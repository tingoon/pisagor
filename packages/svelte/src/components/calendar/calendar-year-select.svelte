<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerYearSelectProps,
  } from "@ark-ui/svelte";
  import { CaretDownIcon } from "phosphor-svelte";
  import { useStyles, withContext } from "./calendar.context";

  let { ...rest }: DatePickerYearSelectProps = $props();
  const styles = useStyles();
  const part = withContext(() => rest, { name: "YearSelect", slot: "select" });
</script>

<div
  class={styles.slots.selectWrapper()}
  data-part="year-select-wrapper"
  data-scope="calendar"
>
  <CalendarPrimitive.YearSelect {...part.props} />
  <CaretDownIcon
    class={styles.slots.selectIcon()}
    data-part="year-select-icon"
    data-scope="calendar"
  />
</div>
