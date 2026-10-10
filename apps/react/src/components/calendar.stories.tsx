import { Calendar } from "@pisagor/react";
import * as Examples from "#/react/examples/calendar";
import preview from "#/storybook/preview";

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
  title: "Components/Forms/Calendar",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Range = meta.story({
  render: Examples.Range,
});

export const MultipleMonths = meta.story({
  render: Examples.MultipleMonths,
});

export const MonthYearSelector = meta.story({
  render: Examples.MonthYearSelector,
});

export const Presets = meta.story({
  render: Examples.Presets,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const MinMax = meta.story({
  render: Examples.MinMax,
});

export const BookedDates = meta.story({
  render: Examples.BookedDates,
});

export const FixedWeeks = meta.story({
  render: Examples.FixedWeeks,
});

export const SelectToday = meta.story({
  render: Examples.SelectToday,
});

export const CustomCellSize = meta.story({
  render: Examples.CustomCellSize,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
