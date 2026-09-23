import { SkipNavContent, SkipNavLink } from "@pisagor/astro/skip-nav";
import StoryFrame from "../../.storybook/story-frame.astro";

export default {
  component: SkipNavContent,
  parameters: {
    docs: {
      description: {
        component:
          "Lets keyboard users jump past repetitive navigation straight to the main content.",
      },
    },
  },
  title: "Components/Navigation/Skip Nav",
};

export const Playground = {
  render: () => ({
    component: StoryFrame,
    slots: {
      default: [
        {
          component: SkipNavLink,
          props: { class: "focus:absolute", id: "demo-content" },
        },
        {
          component: SkipNavContent,
          props: {
            class: "rounded-lg border bg-card p-4",
            id: "demo-content",
          },
          slots: {
            default:
              '<h2 class="mb-2 font-semibold">Main content</h2><p class="text-muted-foreground text-sm">Tab to the skip link, then activate it to land here.</p>',
          },
        },
      ],
    },
  }),
  tags: ["autodocs"],
};
