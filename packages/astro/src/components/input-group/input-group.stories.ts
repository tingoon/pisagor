import InputGroup from "./input-group.astro";
import InputGroupAddon from "./input-group-addon.astro";
import InputGroupText from "./input-group-text.astro";

export default {
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component: "Composes an input with leading or trailing addons and actions.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  title: "Components/Forms/Input Group",
};

export const Default = {
  render: () => ({
    component: InputGroup,
    slots: {
      default: [
        {
          component: InputGroupAddon,
          props: { align: "inline-start" },
          slots: {
            default: { component: InputGroupText, slots: { default: "https://" } },
          },
        },
        '<input class="min-w-0 flex-1 bg-transparent outline-none" placeholder="example.com" />',
      ],
    },
  }),
};
