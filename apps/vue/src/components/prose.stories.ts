import { Prose } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/prose/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Prose,
  parameters: {
    docs: {
      description: {
        component:
          "Styles long-form written content with readable typography for articles and documentation.",
      },
    },
  },
  title: "Components/Data Display/Prose",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const List = meta.story({
  render: exampleRender(Examples.List),
});

export const Separator = meta.story({
  render: exampleRender(Examples.Separator),
});

export const A = meta.story({
  render: exampleRender(Examples.A),
});

export const Blockquote = meta.story({
  render: exampleRender(Examples.Blockquote),
});

export const Details = meta.story({
  render: exampleRender(Examples.Details),
});

export const Dl = meta.story({
  render: exampleRender(Examples.Dl),
});

export const H1 = meta.story({
  render: exampleRender(Examples.H1),
});

export const H2 = meta.story({
  render: exampleRender(Examples.H2),
});

export const H3 = meta.story({
  render: exampleRender(Examples.H3),
});

export const H4 = meta.story({
  render: exampleRender(Examples.H4),
});

export const H5 = meta.story({
  render: exampleRender(Examples.H5),
});

export const H6 = meta.story({
  render: exampleRender(Examples.H6),
});

export const InlineCode = meta.story({
  render: exampleRender(Examples.InlineCode),
});

export const Kbd = meta.story({
  render: exampleRender(Examples.Kbd),
});

export const Mark = meta.story({
  render: exampleRender(Examples.Mark),
});

export const Media = meta.story({
  render: exampleRender(Examples.Media),
});

export const NotProse = meta.story({
  render: exampleRender(Examples.NotProse),
});

export const Ol = meta.story({
  render: exampleRender(Examples.Ol),
});

export const P = meta.story({
  render: exampleRender(Examples.P),
});

export const Small = meta.story({
  render: exampleRender(Examples.Small),
});

export const HtmlTable = meta.story({
  render: exampleRender(Examples.HtmlTable),
});

export const HtmlTrusted = meta.story({
  render: exampleRender(Examples.HtmlTrusted),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
