<script module lang="ts">
  import source from "./disabled-field.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Input } from "@pisagor/svelte";
</script>

<Field disabled>
  <Field.Label>Email</Field.Label>
  <Input disabled placeholder="Enter your email" type="email" />
  <Field.Description>This field is currently unavailable.</Field.Description>
</Field>
