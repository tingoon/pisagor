<script module lang="ts">
  import source from "./sizes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordInput } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <PasswordInput placeholder="Small" size="sm" />
  <PasswordInput placeholder="Medium" size="md" />
  <PasswordInput placeholder="Large" size="lg" />
</div>
