<script lang="ts">
import { Field, NumberInput } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <Field>
    <Field.Label>Step 5</Field.Label>
    <NumberInput defaultValue="0" step={5} />
  </Field>
  <Field>
    <Field.Label>Step 0.1</Field.Label>
    <NumberInput defaultValue="0.1" step={0.1} />
  </Field>
</div>
