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
    <Avatar alt={user.name} fallback={user.fallback} src={user.src} />
  {/each}
</AvatarGroup.Root>
