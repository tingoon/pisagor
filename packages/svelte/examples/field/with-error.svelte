<script lang="ts">
import { Input } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" type="email" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
