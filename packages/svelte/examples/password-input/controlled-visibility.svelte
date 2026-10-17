<script module lang="ts">
  import source from "./controlled-visibility.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { PasswordInput } from "@pisagor/svelte";

  let visible = $state(false);
</script>

<PasswordInput
  onVisibilityChange={(details) => (visible = details.visible)}
  placeholder="Enter password"
  {visible}
/>
