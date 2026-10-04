import { Button, Card } from "@pisagor/astro";
import * as Examples from "#/astro/examples/card";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related content in a bordered surface with optional header and footer.",
      },
    },
  },
  title: "Components/Layout/Card",
});

export const Playground = meta.story({
  render: () => ({
    component: Card,
    props: { class: "w-80" },
    slots: {
      default: [
        {
          component: Card.Header,
          props: {
            description: "Deploy your new project in one click.",
            title: "Create project",
          },
        },
        {
          component: Card.Content,
          slots: {
            default:
              '<p class="text-sm text-muted-foreground">Card body content.</p>',
          },
        },
        {
          component: Card.Footer,
          slots: {
            default: { component: Button, slots: { default: "Deploy" } },
          },
        },
      ],
    },
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Icon = meta.story({
  render: () => ({ component: Examples.Icon }),
});

export const Product = meta.story({
  render: () => ({ component: Examples.Product }),
});
