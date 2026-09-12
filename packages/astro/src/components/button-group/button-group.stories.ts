import Button from "../button/button.astro";
import ButtonGroup from "./button-group.astro";
import ButtonGroupSeparator from "./button-group-separator.astro";

export default {
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: "Groups related actions into a single segmented control.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Button Group",
};

export const Default = {
  render: () => ({
    component: ButtonGroup,
    slots: {
      default: [
        { component: Button, props: { variant: "outline" }, slots: { default: "Copy" } },
        { component: ButtonGroupSeparator },
        { component: Button, props: { variant: "outline" }, slots: { default: "Paste" } },
        { component: ButtonGroupSeparator },
        { component: Button, props: { variant: "outline" }, slots: { default: "Cut" } },
      ],
    },
  }),
};
