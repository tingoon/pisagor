import CircularProgress from "./circular-progress.astro";

export default {
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how far along a task is on a circular track, including indeterminate loading when the duration is unknown.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Circular Progress",
};

export const Default = {
  args: {
    value: 66,
  },
};

export const WithValue = {
  args: {
    isValueVisible: true,
    size: 64,
    value: 72,
  },
};

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
};
