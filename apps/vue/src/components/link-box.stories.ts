import { LinkBox } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/link-box/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Article = meta.story({
  render: exampleRender(Examples.Article),
});

export const WithLink = meta.story({
  render: exampleRender(Examples.WithLink),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
