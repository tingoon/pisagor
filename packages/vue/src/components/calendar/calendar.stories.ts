import { Button } from "@pisagor/vue/button";
import { Calendar, parseDate } from "@pisagor/vue/calendar";
import { Card } from "@pisagor/vue/card";
import { Surface } from "@pisagor/vue/surface";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users browse dates and pick a day, month, or range on a familiar calendar grid.",
      },
    },
  },
  subcomponents: {
    MonthSelect: Calendar.MonthSelect,
    NextTrigger: Calendar.NextTrigger,
    PrevTrigger: Calendar.PrevTrigger,
    Table: Calendar.Table,
    TableDays: Calendar.TableDays,
    ViewControl: Calendar.ViewControl,
    ViewDate: Calendar.ViewDate,
    WeekDays: Calendar.WeekDays,
    YearSelect: Calendar.YearSelect,
  },
  title: "Components/Forms/Calendar",
});

export const Default = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar>
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.ViewDate />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { Calendar, Card, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <Card class="[--space:--spacing(2)]">
          <Card.Content>
            <Calendar>
              <Calendar.ViewControl>
                <Calendar.PrevTrigger />
                <Calendar.ViewDate />
                <Calendar.NextTrigger />
              </Calendar.ViewControl>
              <Calendar.Table>
                <Calendar.WeekDays />
                <Calendar.TableDays />
              </Calendar.Table>
            </Calendar>
          </Card.Content>
        </Card>
      </Surface>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar invalid>
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.ViewDate />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar disabled>
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.ViewDate />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const BookedDates = meta.story({
  render: () => ({
    components: { Calendar, Card },
    setup() {
      const isWeekend = (date: { year: number; month: number; day: number }) => {
        const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
      };

      return { isWeekend };
    },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar :isDateUnavailable="isWeekend">
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
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const CustomCellSize = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar class="[--cell-size:--spacing(10)]">
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
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const MinMax = meta.story({
  render: () => ({
    components: { Calendar, Card },
    setup() {
      const min = parseDate("2025-03-05");
      const max = parseDate("2025-03-31");

      return { max, min };
    },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar :max="max" :min="min">
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
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Range = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar selectionMode="range">
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
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const FixedWeeks = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar fixedWeeks>
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
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const MonthYearSelector = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar>
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
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const MultipleMonths = meta.story({
  render: () => ({
    components: { Calendar, Card },
    setup() {
      const value = ref([parseDate(new Date(Date.now()))]);

      const onValueChange = (details: { value: typeof value.value }) => {
        value.value = details.value;
      };

      return { onValueChange, value };
    },
    template: `
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar
            :numOfMonths="2"
            :onValueChange="onValueChange"
            selectionMode="range"
            :value="value"
          >
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.ViewDate />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <div class="flex gap-2">
              <Calendar.Table>
                <Calendar.WeekDays />
                <Calendar.TableDays />
              </Calendar.Table>
              <Calendar.Table>
                <Calendar.WeekDays />
                <Calendar.TableNextMonth />
              </Calendar.Table>
            </div>
          </Calendar>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Presets = meta.story({
  render: () => ({
    components: { Button, Calendar, Card },
    setup() {
      const presets = [
        { label: "Last 7 days", value: "last7Days" as const },
        { label: "Last 14 days", value: "last14Days" as const },
        { label: "Last 30 days", value: "last30Days" as const },
        { label: "This month", value: "thisMonth" as const },
      ];

      return { presets };
    },
    template: `
      <Calendar class="[--cell-size:--spacing(8)]" selectionMode="range">
        <Card class="[--space:--spacing(2)]">
          <Card.Content>
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
          </Card.Content>
          <Card.Footer class="flex flex-wrap">
            <Calendar.PresetTrigger
              v-for="preset in presets"
              :key="preset.value"
              as-child
              :value="preset.value"
            >
              <Button class="flex-1" size="sm" variant="outline">{{ preset.label }}</Button>
            </Calendar.PresetTrigger>
          </Card.Footer>
        </Card>
      </Calendar>
    `,
  }),
});

export const SelectToday = meta.story({
  render: () => ({
    components: { Calendar, Card },
    template: `
      <Calendar>
        <Card class="[--space:--spacing(2)]">
          <Card.Content>
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
          </Card.Content>
          <Card.Footer>
            <Calendar.TodayTrigger class="w-full" />
          </Card.Footer>
        </Card>
      </Calendar>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Calendar, Card },
    setup() {
      const value = ref([parseDate(new Date(Date.now()))]);

      const onValueChange = (details: { value: typeof value.value }) => {
        value.value = details.value;
      };

      return { onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Card class="[--space:--spacing(2)]">
          <Card.Content>
            <Calendar :onValueChange="onValueChange" :value="value">
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
            </Calendar>
          </Card.Content>
        </Card>
        <p class="text-center text-muted-foreground text-sm">
          {{ value.map((date) => date.toString()).join(", ") }}
        </p>
      </div>
    `,
  }),
});
