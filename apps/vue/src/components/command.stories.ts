import { Command } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/command";

const meta = preview.meta({
  component: Command,
  parameters: {
    docs: {
      description: {
        component:
          "Offers a searchable command palette for jumping to actions, pages, or settings from the keyboard.",
      },
    },
  },
  title: "Components/Overlay/Command",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Groups = meta.story({
  render: exampleRender(Examples.Groups),
});

export const Shortcuts = meta.story({
  render: exampleRender(Examples.Shortcuts),
});

export const WithFooter = meta.story({
  render: exampleRender(Examples.WithFooter),
});

export const Scrollable = meta.story({
  render: exampleRender(Examples.Scrollable),
});

export const WithDialog = meta.story({
  render: exampleRender(Examples.WithDialog),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
