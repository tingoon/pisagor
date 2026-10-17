<script lang="ts">
  import { Avatar, AvatarGroup } from "@pisagor/svelte";

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
  {#each users as user (user.src)}
    <Avatar.Root>
      <Avatar.Image alt={user.name} src={user.src} />
      <Avatar.Fallback>{user.fallback}</Avatar.Fallback>
    </Avatar.Root>
  {/each}
</AvatarGroup.Root>
