import { Button } from "@pisagor/astro/button";
import { ButtonGroup } from "@pisagor/astro/button-group";

export default {
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: "Groups related actions into a single segmented control.",
      },
    },
  },
  title: "Components/Actions/Button Group",
};

export const Playground = {
  render: () => ({
    component: ButtonGroup,
    slots: {
      default: [
        { component: Button, props: { variant: "outline" }, slots: { default: "Copy" } },
        { component: ButtonGroup.Separator },
        { component: Button, props: { variant: "outline" }, slots: { default: "Paste" } },
        { component: ButtonGroup.Separator },
        { component: Button, props: { variant: "outline" }, slots: { default: "Cut" } },
      ],
    },
  }),
  tags: ["autodocs"],
};
