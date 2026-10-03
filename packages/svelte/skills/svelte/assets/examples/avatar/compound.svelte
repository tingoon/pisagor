<script lang="ts">
import { Avatar, AvatarGroup } from "@pisagor/svelte/avatar";
</script>

<AvatarGroup.Root>
      {#each users as user}
<Avatar
          alt={user.name}
          fallback={user.fallback}
          src={user.src}
        />
{/each}
    </AvatarGroup.Root>
