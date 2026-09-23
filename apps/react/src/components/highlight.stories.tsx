import { Highlight } from "@pisagor/react";
import * as Examples from "@pisagor/react/highlight/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Highlight,
  parameters: {
    docs: {
      description: {
        component:
          "Emphasizes matching words inside text so search results and queries are easier to spot.",
      },
    },
  },
  title: "Components/Data Display/Highlight",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Multiple = meta.story({
  render: Examples.Multiple,
});

export const CustomStyle = meta.story({
  render: Examples.CustomStyle,
});

export const SearchQuery = meta.story({
  render: Examples.SearchQuery,
});

export const Squiggle = meta.story({
  render: Examples.Squiggle,
});

export const Default = meta.story({
  render: Examples.Default,
});
