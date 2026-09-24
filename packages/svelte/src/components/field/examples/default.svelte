<script lang="ts">
import { Input } from "../../input";
import { Field } from "../index";
</script>

<Field>
  <Field.Label>
    Email
    <Field.RequiredIndicator />
  </Field.Label>
  <Input placeholder="you@example.com" type="email" />
  <Field.Helper>We'll never share your email.</Field.Helper>
</Field>
