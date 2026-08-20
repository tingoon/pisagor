import { Spinner } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          "Shows that something is loading when the wait time is short and a progress bar is not needed.",
      },
    },
    metadata: {
      aliases: ["loader"],
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Spinner",
});

export const Default = meta.story({});

export const Sizes = meta.story({
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex flex-wrap items-center gap-6">
        <Spinner class="size-4" />
        <Spinner class="size-6" />
        <Spinner class="size-8" />
      </div>
    `,
  }),
});
