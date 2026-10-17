<script module lang="ts">
  import source from "./autocomplete.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordInput } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <PasswordInput autocomplete="current-password" placeholder="••••••••" />
  <PasswordInput autocomplete="new-password" placeholder="••••••••" />
</div>
