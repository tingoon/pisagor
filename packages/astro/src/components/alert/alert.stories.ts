import StoryFrame from "#/storybook/story-frame.astro";
import Alert from "./alert.astro";
import AlertDescription from "./alert-description.astro";
import AlertRoot from "./alert-root.astro";
import AlertTitle from "./alert-title.astro";

export default {
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "Surfaces status, warning, or actionable feedback within page flow.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Feedback/Alert",
};

export const Default = {
  args: {
    description: "You can add components to your app using the cli.",
    title: "Heads up!",
  },
};

export const Variants = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex flex-col gap-3" },
    slots: {
      default: [
        {
          component: Alert,
          props: {
            description: "Neutral informational alert.",
            title: "Default",
            variant: "default",
          },
        },
        {
          component: Alert,
          props: {
            description: "Helpful context for the current step.",
            title: "Info",
            variant: "info",
          },
        },
        {
          component: Alert,
          props: {
            description: "Your changes have been saved.",
            title: "Success",
            variant: "success",
          },
        },
        {
          component: Alert,
          props: {
            description: "Check this value before continuing.",
            title: "Warning",
            variant: "warning",
          },
        },
        {
          component: Alert,
          props: {
            description: "Something went wrong. Try again.",
            title: "Error",
            variant: "destructive",
          },
        },
      ],
    },
  }),
};

export const Compound = {
  render: () => ({
    component: AlertRoot,
    props: { variant: "info" },
    slots: {
      default: [
        { component: AlertTitle, slots: { default: "Compound alert" } },
        {
          component: AlertDescription,
          slots: { default: "Compose Alert.Root with title and description parts." },
        },
      ],
    },
  }),
};
