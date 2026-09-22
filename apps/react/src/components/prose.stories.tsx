import { Prose } from "@pisagor/react";
import * as Examples from "@pisagor/react/prose/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Prose,
  parameters: {
    docs: {
      description: {
        component:
          "Styles long-form written content with readable typography for articles, docs, and markdown.",
      },
    },
  },
  title: "Components/Data Display/Prose",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const List = meta.story({
  render: Examples.List,
});

export const Separator = meta.story({
  render: Examples.Separator,
});

export const A = meta.story({
  render: Examples.A,
});

export const Blockquote = meta.story({
  render: Examples.Blockquote,
});

export const Details = meta.story({
  render: Examples.Details,
});

export const Dl = meta.story({
  render: Examples.Dl,
});

export const H1 = meta.story({
  render: Examples.H1,
});

export const H2 = meta.story({
  render: Examples.H2,
});

export const H3 = meta.story({
  render: Examples.H3,
});

export const H4 = meta.story({
  render: Examples.H4,
});

export const H5 = meta.story({
  render: Examples.H5,
});

export const H6 = meta.story({
  render: Examples.H6,
});

export const InlineCode = meta.story({
  render: Examples.InlineCode,
});

export const Kbd = meta.story({
  render: Examples.Kbd,
});

export const Mark = meta.story({
  render: Examples.Mark,
});

export const Media = meta.story({
  render: Examples.Media,
});

export const NotProse = meta.story({
  render: Examples.NotProse,
});

export const Ol = meta.story({
  render: Examples.Ol,
});

export const P = meta.story({
  render: Examples.P,
});

export const Small = meta.story({
  render: Examples.Small,
});

export const HtmlTable = meta.story({
  render: Examples.HtmlTable,
});

export const Html = meta.story({
  render: Examples.Html,
});
