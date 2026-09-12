import Timeline from "./timeline.astro";

export default {
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component: "Shows a sequence of events with indicators and supporting detail.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Data Display/Timeline",
};

export const Default = {
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
};
