import { Pagination } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/pagination";

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
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const PageRange = meta.story({
  render: exampleRender(Examples.PageRange),
});

export const Links = meta.story({
  render: exampleRender(Examples.Links),
});

export const CustomComposition = meta.story({
  render: exampleRender(Examples.CustomComposition),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
