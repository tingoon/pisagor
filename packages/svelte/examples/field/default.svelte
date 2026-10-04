<script lang="ts">
import { Field, Input } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>
    Email
    <Field.RequiredIndicator />
  </Field.Label>
  <Input placeholder="you@example.com" type="email" />
  <Field.Helper>We'll never share your email.</Field.Helper>
</Field>
