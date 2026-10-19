<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerMonthSelectProps,
  } from "@ark-ui/svelte";
  import { CaretDownIcon } from "phosphor-svelte";
  import { useStyles, withContext } from "./calendar.context";

  let { ...rest }: DatePickerMonthSelectProps = $props();
  const styles = useStyles();
  const part = withContext(() => rest, { name: "MonthSelect", slot: "select" });
</script>

<div
  class={styles.slots.selectWrapper()}
  data-part="month-select-wrapper"
  data-scope="calendar"
>
  <CalendarPrimitive.MonthSelect {...part.props} />
  <CaretDownIcon
    class={styles.slots.selectIcon()}
    data-part="month-select-icon"
    data-scope="calendar"
  />
</div>
