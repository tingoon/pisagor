import Frame from "./frame.astro";
import FrameDescription from "./frame-description.astro";
import FrameFooter from "./frame-footer.astro";
import FrameHeader from "./frame-header.astro";
import FramePanel from "./frame-panel.astro";
import FrameTitle from "./frame-title.astro";

export default {
  component: Frame,
  parameters: {
    docs: {
      description: {
        component:
          "Embeds external content in a framed viewport with a consistent chrome around it.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  title: "Components/Media/Frame",
};

export const Default = {
  render: () => ({
    component: Frame,
    slots: {
      default: [
        {
          component: FrameHeader,
          slots: {
            default: [
              { component: FrameTitle, slots: { default: "Section header" } },
              {
                component: FrameDescription,
                slots: { default: "Brief description about the section" },
              },
            ],
          },
        },
        {
          component: FramePanel,
          slots: {
            default:
              '<h2 class="font-semibold text-sm">Section title</h2><p class="text-muted-foreground text-sm">Section description</p>',
          },
        },
        {
          component: FrameFooter,
          slots: {
            default: '<p class="text-muted-foreground text-sm">Footer</p>',
          },
        },
      ],
    },
  }),
};
