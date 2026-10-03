<script lang="ts">
import { Input } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field disabled>
      <Field.Label>Email</Field.Label>
      <Input disabled placeholder="Enter your email" type="email" />
      <Field.Description>
        This field is currently unavailable.
      </Field.Description>
    </Field>
