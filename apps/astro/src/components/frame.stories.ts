import { Frame } from "@pisagor/astro/frame";

export default {
  component: Frame,
  parameters: {
    docs: {
      description: {
        component:
          "Embeds external content in a framed viewport with a consistent chrome around it.",
      },
    },
  },
  title: "Components/Media/Frame",
};

export const Playground = {
  render: () => ({
    component: Frame,
    slots: {
      default: [
        {
          component: Frame.Header,
          slots: {
            default: [
              { component: Frame.Title, slots: { default: "Section header" } },
              {
                component: Frame.Description,
                slots: { default: "Brief description about the section" },
              },
            ],
          },
        },
        {
          component: Frame.Panel,
          slots: {
            default:
              '<h2 class="font-semibold text-sm">Section title</h2><p class="text-muted-foreground text-sm">Section description</p>',
          },
        },
        {
          component: Frame.Footer,
          slots: {
            default: '<p class="text-muted-foreground text-sm">Footer</p>',
          },
        },
      ],
    },
  }),
  tags: ["autodocs"],
};
