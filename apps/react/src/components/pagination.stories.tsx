import { Pagination } from "@pisagor/react";
import * as Examples from "#/react/examples/pagination";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          "Moves through long lists or result sets page by page with previous, next, and numbered links.",
      },
    },
  },
  title: "Components/Navigation/Pagination",
});

export const Playground = meta.story({
  args: {
    count: 50,
    pageSize: 10,
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const PageRange = meta.story({
  render: Examples.PageRange,
});

export const Links = meta.story({
  render: Examples.Links,
});

export const CustomComposition = meta.story({
  render: Examples.CustomComposition,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
