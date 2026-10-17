<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Rating } from "@pisagor/svelte";
</script>

<Field invalid>
  <Rating defaultValue={2} />
</Field>
