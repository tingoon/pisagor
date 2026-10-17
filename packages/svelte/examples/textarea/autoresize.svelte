<script module lang="ts">
  import source from "./autoresize.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Textarea } from "@pisagor/svelte";
</script>

<Textarea autoresize placeholder="Type your message here" />
