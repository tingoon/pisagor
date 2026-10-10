import { Badge } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/badge";

const meta = preview.meta({
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Labels content with a compact status, category, or count so users can scan it quickly.",
      },
    },
  },
  title: "Components/Data Display/Badge",
});

export const Playground = meta.story({
  render: () => ({
    components: { Badge },
    template: "<Badge>Badge</Badge>",
  }),
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Pill = meta.story({
  render: exampleRender(Examples.Pill),
});

export const WithLink = meta.story({
  render: exampleRender(Examples.WithLink),
});

export const WithSpinner = meta.story({
  render: exampleRender(Examples.WithSpinner),
});

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
