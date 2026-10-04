<script lang="ts">
import { Input } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field orientation="vertical">
      <Field.Label>Name</Field.Label>
      <Input placeholder="Enter your name" type="text" />
      <Field.Description>
        Stacks label, control, and description vertically.
      </Field.Description>
    </Field>
