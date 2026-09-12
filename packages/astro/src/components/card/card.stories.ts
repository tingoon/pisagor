import Button from "../button/button.astro";
import Card from "./card.astro";
import CardContent from "./card-content.astro";
import CardFooter from "./card-footer.astro";
import CardHeader from "./card-header.astro";

export default {
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Groups related content in a bordered surface with optional header and footer.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  title: "Components/Layout/Card",
};

export const Default = {
  render: () => ({
    component: Card,
    props: { class: "w-80" },
    slots: {
      default: [
        {
          component: CardHeader,
          props: {
            description: "Deploy your new project in one click.",
            title: "Create project",
          },
        },
        {
          component: CardContent,
          slots: { default: '<p class="text-sm text-muted-foreground">Card body content.</p>' },
        },
        {
          component: CardFooter,
          slots: {
            default: { component: Button, slots: { default: "Deploy" } },
          },
        },
      ],
    },
  }),
};
