import { Button } from "@pisagor/astro/button";
import { Card } from "@pisagor/astro/card";

export default {
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
};

export const Playground = {
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
};
