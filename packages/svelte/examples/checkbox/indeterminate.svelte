<script module lang="ts">
  import source from "./indeterminate.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Checkbox, Field } from "@pisagor/svelte";
</script>

<Field.Group>
  <Field orientation="horizontal">
    <Checkbox />
    <Field.Content>
      <Field.Label>Select all items</Field.Label>
    </Field.Content>
  </Field>
</Field.Group>
