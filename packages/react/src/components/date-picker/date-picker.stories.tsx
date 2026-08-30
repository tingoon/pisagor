import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, DatePicker, Field, parseDate } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "Lets users pick a date or range from a calendar inside a field or popover.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    ClearTrigger: DatePicker.ClearTrigger,
    Content: DatePicker.Content,
    Input: DatePicker.Input,
    PresetTrigger: DatePicker.PresetTrigger,
    Timer: DatePicker.Timer,
    Trigger: DatePicker.Trigger,
    ValueText: DatePicker.ValueText,
  },
  title: "Components/Forms/Date Picker",
});

export const Default = meta.story({
  render: () => (
    <DatePicker>
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date" />
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content>
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
      </DatePicker.Content>
    </DatePicker>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <DatePicker variant="primary">
        <DatePicker.Input placeholder="Primary" />
        <DatePicker.Content>
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
        </DatePicker.Content>
      </DatePicker>
      <DatePicker variant="secondary">
        <DatePicker.Input placeholder="Secondary" />
        <DatePicker.Content>
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
        </DatePicker.Content>
      </DatePicker>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Range = meta.story({
  render: () => (
    <DatePicker focusedValue={parseDate(new Date())} selectionMode="range">
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date range" />
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content>
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
      </DatePicker.Content>
    </DatePicker>
  ),
});

export const CustomFormat = meta.story({
  render: () => {
    const [value, setValue] = useState([parseDate("2025-01-15")]);

    const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
      new Date((value[0] ?? parseDate("2025-01-15")).toString()),
    );

    return (
      <DatePicker onValueChange={(value) => setValue(value ?? [])} value={value}>
        <DatePicker.Trigger asChild>
          <Button variant="outline">
            <CalendarIcon />
            {formattedDate}
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content>
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
        </DatePicker.Content>
      </DatePicker>
    );
  },
});

export const Input = meta.story({
  render: () => (
    <DatePicker>
      <DatePicker.Input placeholder="Select date" />
      <DatePicker.Content>
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
      </DatePicker.Content>
    </DatePicker>
  ),
});

export const Invalid = meta.story({
  render: () => (
    <DatePicker invalid>
      <DatePicker.Input placeholder="Select date" />
      <DatePicker.Content>
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
      </DatePicker.Content>
    </DatePicker>
  ),
});

export const Disabled = meta.story({
  render: () => (
    <DatePicker disabled>
      <DatePicker.Input placeholder="Select date" />
      <DatePicker.Content>
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
      </DatePicker.Content>
    </DatePicker>
  ),
});

export const Clearable = meta.story({
  render: () => {
    const [value, setValue] = useState([parseDate("2025-06-15")]);

    return (
      <div className="flex flex-col gap-2">
        <Field>
          <Field.Label>Input variant</Field.Label>
          <DatePicker onValueChange={(value) => setValue(value ?? [])} value={value}>
            <DatePicker.Input placeholder="Select date" />
            <DatePicker.Content />
          </DatePicker>
        </Field>
        <Field>
          <Field.Label>Trigger variant</Field.Label>
          <DatePicker onValueChange={(value) => setValue(value ?? [])} value={value}>
            <DatePicker.Trigger asChild>
              <Button variant="outline">
                <CalendarIcon />
                <DatePicker.ValueText placeholder="Pick a date" />
              </Button>
            </DatePicker.Trigger>
            <DatePicker.Content />
          </DatePicker>
        </Field>
      </div>
    );
  },
});

export const Time = meta.story({
  render: () => (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.Timer />
    </Field>
  ),
});

export const WithPresets = meta.story({
  render: () => {
    const presets = [
      { days: 0, label: "Today" },
      { days: 1, label: "Tomorrow" },
      { days: 3, label: "In 3 days" },
      { days: 7, label: "In a week" },
    ] as const;
    return (
      <DatePicker defaultValue={[parseDate(new Date())]}>
        <DatePicker.Trigger asChild>
          <Button variant="outline">
            <CalendarIcon />
            <DatePicker.ValueText />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content>
          <div className="flex max-sm:flex-col">
            <div className="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
              <div className="flex h-full flex-col sm:border-e sm:pe-3">
                {presets.map((preset) => (
                  <DatePicker.PresetTrigger
                    asChild
                    key={preset.label}
                    value={[
                      parseDate(new Date(new Date().setDate(new Date().getDate() + preset.days))),
                    ]}
                  >
                    <Button className="w-full justify-start" size="sm" variant="ghost">
                      {preset.label}
                    </Button>
                  </DatePicker.PresetTrigger>
                ))}
              </div>
            </div>
            <div className="max-sm:pb-3 sm:ps-2">
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
            </div>
          </div>
        </DatePicker.Content>
      </DatePicker>
    );
  },
});
