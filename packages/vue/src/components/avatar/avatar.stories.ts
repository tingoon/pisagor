import { PhUser } from "@phosphor-icons/vue";
import { Avatar } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a user or entity image with a shaped fallback when the source is unavailable.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "standard",
    },
  },
  title: "Components/Media/Avatar",
});

export const Default = meta.story({
  render: () => ({
    components: { Avatar },
    setup() {
      const src = "https://randomuser.me/api/portraits/men/41.jpg";
      return { src };
    },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Avatar :src="src" alt="John Doe" fallback="JD" />
        <Avatar :src="src" alt="John Doe" fallback="JD" size="sm" />
        <Avatar :src="src" alt="John Doe" fallback="JD" size="lg" />
      </div>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex flex-wrap items-end gap-2">
        <Avatar
          alt="Jane Doe"
          fallback="JD"
          size="sm"
          src="https://randomuser.me/api/portraits/women/5.jpg"
        />
        <Avatar
          alt="Jane Doe"
          fallback="JD"
          size="md"
          src="https://randomuser.me/api/portraits/women/5.jpg"
        />
        <Avatar
          alt="Jane Doe"
          fallback="JD"
          size="lg"
          src="https://randomuser.me/api/portraits/women/5.jpg"
        />
        <Avatar
          alt="Jane Doe"
          class="size-16"
          fallback="JD"
          src="https://randomuser.me/api/portraits/women/5.jpg"
        />
      </div>
    `,
  }),
});

export const Shapes = meta.story({
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex flex-wrap gap-2">
        <Avatar
          alt="Jane Doe"
          fallback="JD"
          shape="square"
          src="https://randomuser.me/api/portraits/women/5.jpg"
        />
        <Avatar
          alt="John Doe"
          fallback="JD"
          shape="rounded"
          src="https://randomuser.me/api/portraits/men/12.jpg"
        />
        <Avatar
          alt="Jane Doe"
          fallback="JD"
          shape="circle"
          src="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    `,
  }),
});

export const Fallbacks = meta.story({
  render: () => ({
    components: { Avatar },
    setup() {
      return { userIcon: h(PhUser) };
    },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Avatar alt="Jane Doe" fallback="JD" />
        <Avatar alt="John Doe" fallback="JD" />
        <Avatar alt="Guest user" :fallback="userIcon" />
      </div>
    `,
  }),
});

export const FallbackOnly = meta.story({
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Avatar fallback="JD" />
        <Avatar fallback="JD" shape="rounded" />
        <Avatar fallback="JD" shape="square" />
      </div>
    `,
  }),
});
