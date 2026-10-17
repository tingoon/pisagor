<script module lang="ts">
  import source from "./custom-timeout.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Clipboard } from "@pisagor/svelte";
</script>

<Clipboard timeout={5000} value="https://example.com/docs" />
