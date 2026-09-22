import { LinkBox } from "@pisagor/react";
import * as Examples from "@pisagor/react/link-box/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Article = meta.story({
  render: Examples.Article,
});

export const WithLink = meta.story({
  render: Examples.WithLink,
});
