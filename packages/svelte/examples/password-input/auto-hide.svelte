<script lang="ts">
import { PasswordInput } from "@pisagor/svelte";

let visible = $state(false);

const HIDE_DELAY_MS = 3000;
  

  const handleVisibilityChange = (visible: boolean) => {
    setVisible(visible);

    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, HIDE_DELAY_MS);
    }
  };
</script>

<PasswordInput
      onVisibilityChange={({ visible }) => handleVisibilityChange(visible)}
      placeholder="Enter password"
      visible={visible}
    />
