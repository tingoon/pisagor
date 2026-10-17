<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Textarea } from "@pisagor/svelte";
</script>

<Textarea disabled placeholder="Type your feedback here" />
