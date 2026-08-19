import { Avatar, AvatarGroup } from "@pisagor/vue/avatar";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Shows several people at once by stacking avatars, with an optional count for members that do not fit.",
      },
    },
  },
  subcomponents: {
    Avatar,
    Count: AvatarGroup.Count,
    Root: AvatarGroup.Root,
  },
  title: "Components/Data Display/Avatar/Avatar Group",
});

export const Default = meta.story({
  render: () => ({
    components: { AvatarGroup },
    setup() {
      return { users: users() };
    },
    template: `<AvatarGroup :max="4" :users="users" />`,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { Avatar, AvatarGroup },
    setup() {
      return { users: users() };
    },
    template: `
      <AvatarGroup.Root>
        <Avatar
          v-for="user in users"
          :key="user.src"
          :alt="user.name"
          :fallback="user.fallback"
          :src="user.src"
        />
      </AvatarGroup.Root>
    `,
  }),
});

export const Count = meta.story({
  render: () => ({
    components: { Avatar, AvatarGroup },
    setup() {
      return { users: users() };
    },
    template: `
      <AvatarGroup.Root>
        <Avatar
          v-for="user in users"
          :key="user.src"
          :alt="user.name"
          :fallback="user.fallback"
          :src="user.src"
        />
        <AvatarGroup.Count>+5</AvatarGroup.Count>
      </AvatarGroup.Root>
    `,
  }),
});

function users() {
  return [
    {
      fallback: "JD",
      name: "Jane Doe",
      src: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      fallback: "JD",
      name: "John Doe",
      src: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      fallback: "JD",
      name: "Jane Doe",
      src: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      fallback: "JD",
      name: "John Doe",
      src: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];
}
