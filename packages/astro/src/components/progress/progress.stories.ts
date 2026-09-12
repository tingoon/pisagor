import Progress from "./progress.astro";

export default {
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how complete a task is along a track, including indeterminate loading when progress is unknown.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Progress",
};

export const Default = {
  args: {
    value: 66,
  },
};

export const WithLabel = {
  args: {
    isValueVisible: true,
    label: "Upload progress",
    value: 66,
  },
};

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
};
