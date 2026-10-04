<script lang="ts">
import { PasswordInput } from "@pisagor/svelte";

let visible = $state(false);
</script>

<PasswordInput
  onVisibilityChange={(details) => (visible = details.visible)}
  placeholder="Enter password"
  {visible}
/>
