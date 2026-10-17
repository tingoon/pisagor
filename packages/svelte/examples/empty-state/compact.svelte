<script module lang="ts">
  import source from "./compact.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { EmptyState } from "@pisagor/svelte";
</script>

<EmptyState
  class="p-6"
  description="You're all caught up. New notifications will appear here."
  title="No notifications"
/>
