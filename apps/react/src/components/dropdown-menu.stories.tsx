import { DropdownMenu } from "@pisagor/react";
import * as Examples from "@pisagor/react/dropdown-menu/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Opens a dropdown list of actions or destinations from a trigger for navigation and contextual commands.",
      },
    },
  },
  title: "Components/Navigation/Dropdown Menu",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Shortcuts = meta.story({
  render: Examples.Shortcuts,
});

export const Checkboxes = meta.story({
  render: Examples.Checkboxes,
});

export const Destructive = meta.story({
  render: Examples.Destructive,
});

export const GroupLabel = meta.story({
  render: Examples.GroupLabel,
});

export const Icons = meta.story({
  render: Examples.Icons,
});

export const Link = meta.story({
  render: Examples.Link,
});

export const Nested = meta.story({
  render: Examples.Nested,
});

export const QuickItem = meta.story({
  render: Examples.QuickItem,
});

export const RadioGroup = meta.story({
  render: Examples.RadioGroup,
});

export const WithScroll = meta.story({
  render: Examples.WithScroll,
});

export const WithSeparator = meta.story({
  render: Examples.WithSeparator,
});

export const Placements = meta.story({
  render: Examples.Placements,
});
