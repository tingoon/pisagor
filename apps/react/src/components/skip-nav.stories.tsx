import { SkipNav } from "@pisagor/react";
import * as Examples from "@pisagor/react/skip-nav/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SkipNav.Link,
  parameters: {
    docs: {
      description: {
        component:
          "Lets keyboard users jump past repetitive navigation straight to the main content.",
      },
    },
  },
  title: "Components/Navigation/Skip Nav",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});
