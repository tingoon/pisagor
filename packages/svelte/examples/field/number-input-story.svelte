<script lang="ts">
import { Field, NumberInput } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>Quantity</Field.Label>
  <NumberInput defaultValue="50" max={100} min={1} />
</Field>
