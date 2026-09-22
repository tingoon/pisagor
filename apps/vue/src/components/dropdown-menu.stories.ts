import { DropdownMenu } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/dropdown-menu/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Shortcuts = meta.story({
  render: exampleRender(Examples.Shortcuts),
});

export const Checkboxes = meta.story({
  render: exampleRender(Examples.Checkboxes),
});

export const Destructive = meta.story({
  render: exampleRender(Examples.Destructive),
});

export const GroupLabel = meta.story({
  render: exampleRender(Examples.GroupLabel),
});

export const Icons = meta.story({
  render: exampleRender(Examples.Icons),
});

export const Link = meta.story({
  render: exampleRender(Examples.Link),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const QuickItem = meta.story({
  render: exampleRender(Examples.QuickItem),
});

export const RadioGroup = meta.story({
  render: exampleRender(Examples.RadioGroup),
});

export const WithScroll = meta.story({
  render: exampleRender(Examples.WithScroll),
});

export const WithSeparator = meta.story({
  render: exampleRender(Examples.WithSeparator),
});

export const Placements = meta.story({
  render: exampleRender(Examples.Placements),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
