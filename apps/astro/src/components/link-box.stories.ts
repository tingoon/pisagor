import { LinkBox } from "@pisagor/astro/link-box";

export default {
  component: LinkBox,
  parameters: {
    docs: {
      description: {
        component:
          "Makes an entire card or tile clickable while keeping nested buttons usable underneath.",
      },
    },
  },
  title: "Components/Utilities/Link Box",
};

export const Playground = {
  render: () => ({
    component: LinkBox,
    props: { class: "rounded-xl border p-4" },
    slots: {
      default: [
        '<h2 class="font-medium text-lg">',
        {
          component: LinkBox.Overlay,
          props: { href: "https://example.com" },
          slots: { default: "Clickable card title" },
        },
        "</h2>",
        '<p class="text-muted-foreground text-sm">The overlay expands the title link to cover the card for a larger click target.</p>',
      ],
    },
  }),
  tags: ["autodocs"],
};
