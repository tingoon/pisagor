import { Highlight } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/highlight";

const meta = preview.meta({
  component: Highlight,
  parameters: {
    docs: {
      description: {
        component:
          "Highlights matching text segments for search results and emphasis.",
      },
    },
  },
  title: "Components/Data Display/Highlight",
});

export const Playground = meta.story({
  args: {
    query: "accessible",
    text: "Build accessible interfaces with reusable UI components.",
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Squiggle = meta.story({
  render: exampleRender(Examples.Squiggle),
});

export const Multiple = meta.story({
  render: exampleRender(Examples.Multiple),
});

export const SearchQuery = meta.story({
  render: exampleRender(Examples.SearchQuery),
});

export const CustomStyle = meta.story({
  render: exampleRender(Examples.CustomStyle),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
