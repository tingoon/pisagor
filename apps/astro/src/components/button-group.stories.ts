import { Button, ButtonGroup } from "@pisagor/astro";
import * as Examples from "#/astro/examples/button-group";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: "Groups related actions into a single segmented control.",
      },
    },
  },
  title: "Components/Actions/Button Group",
});

export const Playground = meta.story({
  render: () => ({
    component: ButtonGroup,
    slots: {
      default: [
        {
          component: Button,
          props: { variant: "outline" },
          slots: { default: "Copy" },
        },
        { component: ButtonGroup.Separator },
        {
          component: Button,
          props: { variant: "outline" },
          slots: { default: "Paste" },
        },
        { component: ButtonGroup.Separator },
        {
          component: Button,
          props: { variant: "outline" },
          slots: { default: "Cut" },
        },
      ],
    },
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({ component: Examples.OrientationHorizontal }),
});

export const OrientationVertical = meta.story({
  render: () => ({ component: Examples.OrientationVertical }),
});

export const Nested = meta.story({
  render: () => ({ component: Examples.Nested }),
});

export const WithSeparator = meta.story({
  render: () => ({ component: Examples.WithSeparator }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
