<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordInput } from "@pisagor/svelte";
</script>

<PasswordInput.Root class="w-64">
  <PasswordInput.Control>
    <PasswordInput.Input placeholder="Password" />
    <PasswordInput.VisibilityTrigger />
  </PasswordInput.Control>
</PasswordInput.Root>
