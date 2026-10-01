/** @jsxImportSource solid-js */
import { Avatar, AvatarGroup, Button, Popover } from "@pisagor/solid";
import { For } from "solid-js";

export function AvatarGroupOverflow() {
  return (
    <AvatarGroup.Root>
      <For each={users}>
        {(user) => (
          <Avatar alt={user.name} fallback={user.fallback} src={user.src} />
        )}
      </For>
      <Popover positioning={{ placement: "bottom-end" }}>
        <Popover.Trigger
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Show more members"
              pill
              size="icon-md"
              variant="ghost"
            >
              +5
            </Button>
          )}
        />
        <Popover.Content>
          <Popover.Body>
            <AvatarGroup.Root>
              <For each={users}>
                {(user) => (
                  <Avatar
                    alt={user.name}
                    fallback={user.fallback}
                    src={user.src}
                  />
                )}
              </For>
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
