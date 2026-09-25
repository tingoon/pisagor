import { Timeline } from "@pisagor/astro/timeline";

export default {
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a sequence of events with indicators and supporting detail.",
      },
    },
  },
  title: "Components/Data Display/Timeline",
};

export const Playground = {
  args: {
    items: [
      {
        description: "Your application was received.",
        indicator: "1",
        title: "Application submitted",
      },
      {
        description: "A teammate is reviewing your details.",
        indicator: "2",
        title: "Under review",
      },
      {
        description: "You're ready to continue.",
        indicator: "3",
        title: "Approved",
      },
    ],
  },
  tags: ["autodocs"],
};
