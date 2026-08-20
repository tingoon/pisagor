import { Avatar, AvatarGroup, Button, Popover } from "@pisagor/react";

export function AvatarGroupOverflow() {
  return (
    <AvatarGroup.Root>
      {users.map((user) => (
        <Avatar alt={user.name} fallback={user.fallback} key={user.src} src={user.src} />
      ))}
      <Popover positioning={{ placement: "bottom-end" }}>
        <AvatarGroup.Count asChild>
          <Popover.Trigger asChild>
            <Button pill size="icon-md" variant="ghost">
              +5
            </Button>
          </Popover.Trigger>
        </AvatarGroup.Count>
        <Popover.Content>
          <Popover.Body>
            <AvatarGroup.Root>
              {users.map((user) => (
                <Avatar
                  alt={user.name}
                  fallback={user.fallback}
                  key={user.fallback}
                  src={user.src}
                />
              ))}
            </AvatarGroup.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover>
    </AvatarGroup.Root>
  );
}

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
