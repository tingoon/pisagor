<script lang="ts">
import { Calendar } from "../index";
</script>

<Calendar>
  <Calendar.View view="day">
    <Calendar.ViewControl>
      <Calendar.PrevTrigger />
      <Calendar.MonthSelect />
      <Calendar.YearSelect />
      <Calendar.NextTrigger />
    </Calendar.ViewControl>
    <Calendar.Table>
      <Calendar.WeekDays />
      <Calendar.TableDays />
    </Calendar.Table>
  </Calendar.View>
</Calendar>
