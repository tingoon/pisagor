<script lang="ts">
import { Field, Input } from "@pisagor/svelte";
</script>

<Field invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" type="email" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
