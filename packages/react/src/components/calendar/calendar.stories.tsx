import { Button } from "@pisagor/react/button";
import { Calendar, parseDate } from "@pisagor/react/calendar";
import { Card } from "@pisagor/react/card";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: Calendar,
  parameters: {
    docs: {
      aliases: ["date-grid"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Lets users browse dates and pick a day, month, or range on a familiar calendar grid.",
      },
      taxonomy: "pattern",
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
  render: () => (
    <Card className="[--space:--spacing(2)]">
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
  ),
});

export const Invalid = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
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
  ),
});

export const Disabled = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
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
  ),
});

export const OnSurface = Default.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const BookedDates = meta.story({
  render: () => {
    const isWeekend = (date: { year: number; month: number; day: number }) => {
      const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();
      return dayOfWeek === 0 || dayOfWeek === 6;
    };
    return (
      <Card className="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar isDateUnavailable={isWeekend}>
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
    );
  },
});

export const CustomCellSize = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar className="[--cell-size:--spacing(10)]">
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
  ),
});

export const MinMax = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar max={parseDate("2025-03-31")} min={parseDate("2025-03-05")}>
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
  ),
});

export const Range = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
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
  ),
});

export const FixedWeeks = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
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
  ),
});

export const MonthYearSelector = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)]">
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
  ),
});

export const MultipleMonths = meta.story({
  render: () => {
    const [value, setValue] = useState([parseDate(new Date(Date.now()))]);

    return (
      <Card className="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar
            numOfMonths={2}
            onValueChange={({ value }) => setValue(value)}
            selectionMode="range"
            value={value}
          >
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.ViewDate />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <div className="flex gap-2">
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
    );
  },
});

export const Presets = meta.story({
  render: () => {
    const presets = [
      { label: "Last 7 days", value: "last7Days" as const },
      { label: "Last 14 days", value: "last14Days" as const },
      { label: "Last 30 days", value: "last30Days" as const },
      { label: "This month", value: "thisMonth" as const },
    ];
    return (
      <Calendar className="[--cell-size:--spacing(8)]" selectionMode="range">
        <Card className="[--space:--spacing(2)]">
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
          <Card.Footer className="flex flex-wrap">
            {presets.map((preset) => (
              <Calendar.PresetTrigger asChild key={preset.value} value={preset.value}>
                <Button className="flex-1" size="sm" variant="outline">
                  {preset.label}
                </Button>
              </Calendar.PresetTrigger>
            ))}
          </Card.Footer>
        </Card>
      </Calendar>
    );
  },
});

export const SelectToday = meta.story({
  render: () => (
    <Calendar>
      <Card className="[--space:--spacing(2)]">
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
          <Calendar.TodayTrigger className="w-full" />
        </Card.Footer>
      </Card>
    </Calendar>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState([parseDate(new Date(Date.now()))]);

    return (
      <div className="flex flex-col gap-2">
        <Card className="[--space:--spacing(2)]">
          <Card.Content>
            <Calendar onValueChange={({ value }) => setValue(value)} value={value}>
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
        <p className="text-center text-muted-foreground text-sm">
          {value.map((date) => date.toString())}
        </p>
      </div>
    );
  },
});
