<script lang="ts">
import { Textarea } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field>
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself…" />
      <Field.Description>
        Write a short bio. Maximum 500 characters.
      </Field.Description>
    </Field>
