import { Timer } from "@pisagor/react";
import * as Examples from "@pisagor/react/timer/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const CountdownDate = meta.story({
  render: Examples.CountdownDate,
});

export const Countdown = meta.story({
  render: Examples.Countdown,
});

export const CustomSeparator = meta.story({
  render: Examples.CustomSeparator,
});

export const Interval = meta.story({
  render: Examples.Interval,
});

export const Pomodoro = meta.story({
  render: Examples.Pomodoro,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});
