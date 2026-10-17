<script module lang="ts">
  import source from "./initials.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Avatar } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Avatar name="Jane Doe" />
  <Avatar name="Ada" />
  <Avatar name="Grace Brewster Hopper" />
</div>
