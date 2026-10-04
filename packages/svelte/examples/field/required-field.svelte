<script lang="ts">
import { Input } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field required>
      <Field.Label>
        Password <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Enter password" type="password" />
      <Field.Error>Please fill out this field.</Field.Error>
    </Field>
