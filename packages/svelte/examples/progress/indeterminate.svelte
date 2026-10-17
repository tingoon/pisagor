<script module lang="ts">
  import source from "./indeterminate.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Progress } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>Establishing connection...</Field.Label>
  <Progress />
</Field>
