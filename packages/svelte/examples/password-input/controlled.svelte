<script lang="ts">
import { PasswordInput } from "@pisagor/svelte";

let password = $state("");
</script>

<PasswordInput
  onValueChange={(next) => (password = next)}
  placeholder="Enter password"
  value={password}
/>
