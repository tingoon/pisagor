import { Calendar } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/calendar/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const BookedDates = meta.story({
  render: exampleRender(Examples.BookedDates),
});

export const CustomCellSize = meta.story({
  render: exampleRender(Examples.CustomCellSize),
});

export const MinMax = meta.story({
  render: exampleRender(Examples.MinMax),
});

export const Range = meta.story({
  render: exampleRender(Examples.Range),
});

export const FixedWeeks = meta.story({
  render: exampleRender(Examples.FixedWeeks),
});

export const MonthYearSelector = meta.story({
  render: exampleRender(Examples.MonthYearSelector),
});

export const MultipleMonths = meta.story({
  render: exampleRender(Examples.MultipleMonths),
});

export const Presets = meta.story({
  render: exampleRender(Examples.Presets),
});

export const SelectToday = meta.story({
  render: exampleRender(Examples.SelectToday),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
