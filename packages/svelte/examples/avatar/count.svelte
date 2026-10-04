<script lang="ts">
import { Avatar, AvatarGroup } from "@pisagor/svelte";
</script>

<AvatarGroup.Root>
      {#each users as user}
<Avatar
          alt={user.name}
          fallback={user.fallback}
          src={user.src}
        />
{/each}
      <AvatarGroup.Count>+5</AvatarGroup.Count>
    </AvatarGroup.Root>
