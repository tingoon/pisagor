<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Input } from "@pisagor/svelte";
</script>

<Field invalid>
  <Input placeholder="you@example.com" />
</Field>
