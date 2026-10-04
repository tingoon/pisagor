<script lang="ts">
import { Avatar } from "@pisagor/svelte";
import UserIcon from "phosphor-svelte/lib/UserIcon";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Avatar alt="Jane Doe" fallback="JD" />
  <Avatar alt="John Doe" fallback="JD" />
  <Avatar alt="Guest user">
    {#snippet fallback()}
      <UserIcon />
    {/snippet}
  </Avatar>
</div>
