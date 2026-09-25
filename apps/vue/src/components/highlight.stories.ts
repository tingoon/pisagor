import { Highlight } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/highlight/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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
  tags: ["autodocs"],
});

export const Multiple = meta.story({
  render: exampleRender(Examples.Multiple),
});

export const CustomStyle = meta.story({
  render: exampleRender(Examples.CustomStyle),
});

export const SearchQuery = meta.story({
  render: exampleRender(Examples.SearchQuery),
});

export const Squiggle = meta.story({
  render: exampleRender(Examples.Squiggle),
});

export const MultipleQueries = meta.story({
  render: exampleRender(Examples.MultipleQueries),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
