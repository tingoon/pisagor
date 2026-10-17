<script module lang="ts">
  import source from "./with-label.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Clipboard } from "@pisagor/svelte";
</script>

<Clipboard buttonVariant="outline" label="Install" value="bun add ui" />
