import { Prose } from "@pisagor/astro";
import * as Examples from "#/astro/examples/prose";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Prose,
  parameters: {
    docs: {
      description: {
        component:
          "Styles long-form HTML content with readable typography defaults.",
      },
    },
  },
  title: "Components/Data Display/Prose",
});

export const Playground = meta.story({
  args: {
    slots: {
      default: `
        <h1>Prose</h1>
        <p>Long-form content with sensible typography defaults for headings, paragraphs, and lists.</p>
        <ul>
          <li>First item</li>
          <li>Second item</li>
        </ul>
      `,
    },
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const A = meta.story({
  render: () => ({ component: Examples.A }),
});

export const Blockquote = meta.story({
  render: () => ({ component: Examples.Blockquote }),
});

export const Details = meta.story({
  render: () => ({ component: Examples.Details }),
});

export const Dl = meta.story({
  render: () => ({ component: Examples.Dl }),
});

export const H1 = meta.story({
  render: () => ({ component: Examples.H1 }),
});

export const H2 = meta.story({
  render: () => ({ component: Examples.H2 }),
});

export const H3 = meta.story({
  render: () => ({ component: Examples.H3 }),
});

export const H4 = meta.story({
  render: () => ({ component: Examples.H4 }),
});

export const H5 = meta.story({
  render: () => ({ component: Examples.H5 }),
});

export const H6 = meta.story({
  render: () => ({ component: Examples.H6 }),
});

export const Html = meta.story({
  render: () => ({ component: Examples.Html }),
});

export const HtmlTable = meta.story({
  render: () => ({ component: Examples.HtmlTable }),
});

export const InlineCode = meta.story({
  render: () => ({ component: Examples.InlineCode }),
});

export const Kbd = meta.story({
  render: () => ({ component: Examples.Kbd }),
});

export const List = meta.story({
  render: () => ({ component: Examples.List }),
});

export const Mark = meta.story({
  render: () => ({ component: Examples.Mark }),
});

export const Media = meta.story({
  render: () => ({ component: Examples.Media }),
});

export const NotProse = meta.story({
  render: () => ({ component: Examples.NotProse }),
});

export const Ol = meta.story({
  render: () => ({ component: Examples.Ol }),
});

export const P = meta.story({
  render: () => ({ component: Examples.P }),
});

export const Separator = meta.story({
  render: () => ({ component: Examples.Separator }),
});

export const Small = meta.story({
  render: () => ({ component: Examples.Small }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
