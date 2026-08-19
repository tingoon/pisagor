import { PhPlus } from "@phosphor-icons/vue";
import { Status } from "@pisagor/vue/status";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Status,
  parameters: {
    docs: {
      description: {
        component:
          "Signals state with a small colored dot so users can see availability or severity at a glance.",
      },
    },
  },
  title: "Components/Feedback/Status",
});

export const Default = meta.story({});

export const Sizes = meta.story({
  render: () => ({
    components: { Status },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Status size="sm" variant="info" />
        <Status size="md" variant="info" />
        <Status size="lg" variant="info" />
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Status },
    template: `
      <div class="flex gap-2">
        <Status variant="default" />
        <Status variant="success" />
        <Status variant="info" />
        <Status variant="warning" />
        <Status variant="destructive" />
      </div>
    `,
  }),
});

export const CustomColor = meta.story({
  render: () => ({
    components: { Status },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Status class="bg-amber-500" />
        <Status class="bg-teal-500" />
        <Status class="bg-purple-500" />
      </div>
    `,
  }),
});

export const CustomSize = meta.story({
  render: () => ({
    components: { Status },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Status class="size-4" variant="success" />
        <Status class="size-6" variant="info" />
        <Status class="size-8" variant="warning" />
      </div>
    `,
  }),
});

export const WithIcon = meta.story({
  render: () => ({
    components: { PhPlus, Status },
    template: `
      <Status size="lg">
        <PhPlus />
      </Status>
    `,
  }),
});
