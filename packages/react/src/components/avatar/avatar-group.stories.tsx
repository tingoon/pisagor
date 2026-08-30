import { Avatar, AvatarGroup } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Shows several people at once by stacking avatars, with an optional count for members that do not fit.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Avatar,
    Count: AvatarGroup.Count,
    Root: AvatarGroup.Root,
  },
  title: "Components/Data Display/Avatar/Avatar Group",
});

const users = [
  {
    fallback: "JD",
    handle: "jane.doe@example.com",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    handle: "john.doe@example.com",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    handle: "jane.doe@example.com",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    handle: "john.doe@example.com",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export const Default = meta.story({
  args: {
    max: 4,
    users,
  },
});

export const Compound = meta.story({
  render: () => (
    <AvatarGroup.Root>
      {users.map((user) => (
        <Avatar alt={user.name} fallback={user.fallback} key={user.src} src={user.src} />
      ))}
    </AvatarGroup.Root>
  ),
});

export const Count = meta.story({
  render: () => (
    <AvatarGroup.Root>
      {users.map((user) => (
        <Avatar alt={user.name} fallback={user.fallback} key={user.src} src={user.src} />
      ))}
      <AvatarGroup.Count>+5</AvatarGroup.Count>
    </AvatarGroup.Root>
  ),
});
