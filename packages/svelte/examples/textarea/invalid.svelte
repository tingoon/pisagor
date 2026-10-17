<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Textarea } from "@pisagor/svelte";
</script>

<Field invalid>
  <Textarea placeholder="Tell us more" />
</Field>
