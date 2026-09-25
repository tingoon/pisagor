import { InputGroup } from "@pisagor/astro/input-group";

export default {
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Composes an input with leading or trailing addons and actions.",
      },
    },
  },
  title: "Components/Forms/Input Group",
};

export const Playground = {
  render: () => ({
    component: InputGroup,
    slots: {
      default: [
        {
          component: InputGroup.Addon,
          props: { align: "inline-start" },
          slots: {
            default: {
              component: InputGroup.Text,
              slots: { default: "https://" },
            },
          },
        },
        '<input class="min-w-0 flex-1 bg-transparent outline-none" placeholder="example.com" />',
      ],
    },
  }),
  tags: ["autodocs"],
};
