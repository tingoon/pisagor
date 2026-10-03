<script lang="ts">
import { Field } from "@pisagor/svelte/field";
import { Input } from "@pisagor/svelte/input";
</script>

<Field>
  <Field.Label>
    Email
    <Field.RequiredIndicator />
  </Field.Label>
  <Input placeholder="you@example.com" type="email" />
  <Field.Helper>We'll never share your email.</Field.Helper>
</Field>
