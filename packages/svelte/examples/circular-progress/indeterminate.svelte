<script module lang="ts">
  import source from "./indeterminate.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularProgress, Field } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label class="justify-center">Establishing connection...</Field.Label>
  <CircularProgress />
</Field>
