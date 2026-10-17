<script module lang="ts">
  import source from "./orientation-horizontal.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Switch } from "@pisagor/svelte";
</script>

<Field orientation="horizontal">
  <Switch />
  <Field.Label>Enable notifications</Field.Label>
</Field>
