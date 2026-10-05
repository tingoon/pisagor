import { InputGroup } from "@pisagor/astro";
import * as Examples from "#/astro/examples/input-group";
import preview from "#/storybook/preview";

const meta = preview.meta({
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
});

export const Playground = meta.story({
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
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});
