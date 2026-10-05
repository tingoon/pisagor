<script lang="ts">
import { PasswordInput } from "@pisagor/svelte";

let visible = $state(false);

const HIDE_DELAY_MS = 3000;

const handleVisibilityChange = (nextVisible: boolean) => {
  visible = nextVisible;

  if (nextVisible) {
    setTimeout(() => {
      visible = false;
    }, HIDE_DELAY_MS);
  }
};
</script>

<PasswordInput
  onVisibilityChange={({ visible }) => handleVisibilityChange(visible)}
  placeholder="Enter password"
  {visible}
/>
