<script lang="ts">
import { Avatar, AvatarGroup, Button, Popover } from "@pisagor/svelte";

const users = [
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
</script>

<AvatarGroup.Root>
  {#each users as user}
    <Avatar alt={user.name} fallback={user.fallback} src={user.src} />
  {/each}
  <Popover positioning={{ placement: "bottom-end" }}>
    <Popover.Trigger>
      <Button
        aria-label="Show more members"
        pill
        size="icon-md"
        variant="ghost"
      >
        +5
      </Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Body>
        <AvatarGroup.Root>
          {#each users as user}
            <Avatar alt={user.name} fallback={user.fallback} src={user.src} />
          {/each}
        </AvatarGroup.Root>
      </Popover.Body>
    </Popover.Content>
  </Popover>
</AvatarGroup.Root>
