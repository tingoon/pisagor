<script module lang="ts">
  import source from "./switch-field.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Switch } from "@pisagor/svelte";
</script>

<Field orientation="horizontal">
  <Switch defaultChecked />
  <Field.Label>Airplane mode</Field.Label>
</Field>
