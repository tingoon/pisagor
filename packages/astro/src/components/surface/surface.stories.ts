import Surface from "./surface.astro";

export default {
  component: Surface,
  parameters: {
    docs: {
      description: {
        component: "Provides nested background surfaces that step through tonal levels.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Layout/Surface",
};

export const Default = {
  args: {
    class: "p-4",
    slots: { default: "Surface" },
  },
};

export const Nested = {
  render: () => ({
    component: Surface,
    props: { class: "p-4", depth: 0 },
    slots: {
      default: {
        component: Surface,
        props: { class: "p-4", depth: 1 },
        slots: {
          default: {
            component: Surface,
            props: { class: "p-4", depth: 2 },
            slots: { default: "Nested surfaces" },
          },
        },
      },
    },
  }),
};
