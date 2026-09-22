import { Timer } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/timer/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Timer,
  parameters: {
    docs: {
      description: {
        component:
          "Counts up or down through intervals so users can track elapsed time or remaining time.",
      },
    },
  },
  title: "Components/Feedback/Timer",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const CountdownDate = meta.story({
  render: exampleRender(Examples.CountdownDate),
});

export const Countdown = meta.story({
  render: exampleRender(Examples.Countdown),
});

export const CustomSeparator = meta.story({
  render: exampleRender(Examples.CustomSeparator),
});

export const Interval = meta.story({
  render: exampleRender(Examples.Interval),
});

export const Pomodoro = meta.story({
  render: exampleRender(Examples.Pomodoro),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
