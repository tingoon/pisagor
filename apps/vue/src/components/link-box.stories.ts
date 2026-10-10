import { LinkBox } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/link-box";

const meta = preview.meta({
  component: LinkBox,
  parameters: {
    docs: {
      description: {
        component:
          "Makes an entire card or tile clickable while keeping nested buttons usable underneath.",
      },
    },
  },
  title: "Components/Utilities/Link Box",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Article = meta.story({
  render: exampleRender(Examples.Article),
});

export const WithLink = meta.story({
  render: exampleRender(Examples.WithLink),
});
