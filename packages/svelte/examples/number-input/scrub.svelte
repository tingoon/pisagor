<script module lang="ts">
  import source from "./scrub.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, NumberInput } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>Quantity</Field.Label>
  <NumberInput defaultValue="1" />
</Field>
