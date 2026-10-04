import { Button } from "@pisagor/astro/button";
import { ButtonGroup } from "@pisagor/astro/button-group";
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
