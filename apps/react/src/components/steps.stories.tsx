import { Steps } from "@pisagor/react";
import * as Examples from "@pisagor/react/steps/examples";

import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Steps,
  parameters: {
    docs: {
      description: {
        component:
          "Guides users through a multi-step flow and shows which stage they are on.",
      },
    },
  },
  title: "Components/Navigation/Steps",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Icon = meta.story({
  render: Examples.Icon,
});

export const Vertical = meta.story({
  render: Examples.Vertical,
});

export const Loading = meta.story({
  render: Examples.Loading,
});

export const Description = meta.story({
  render: Examples.Description,
});

export const Title = meta.story({
  render: Examples.Title,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
