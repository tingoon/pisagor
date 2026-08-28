import { UserIcon } from "@phosphor-icons/react";
import preview from "#/storybook/preview";
import { Avatar, AvatarGroup } from "..";

const meta = preview.meta({
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Shows who a user is in the interface — usually a profile photo, or initials or an icon when there is no image or it has not loaded yet.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Group: AvatarGroup,
    GroupCount: AvatarGroup.Count,
  },
  title: "Components/Data Display/Avatar",
});

export const Default = meta.story({
  args: {
    alt: "Jane Doe",
    fallback: "JD",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-end gap-2">
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
        className="size-16"
        fallback="JD"
        src="https://randomuser.me/api/portraits/women/5.jpg"
      />
    </div>
  ),
});

export const Shapes = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
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
  ),
});

export const Fallbacks = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar alt="Jane Doe" fallback="JD" />
      <Avatar alt="John Doe" fallback="JD" />
      <Avatar alt="Guest user" fallback={<UserIcon />} />
    </div>
  ),
});
