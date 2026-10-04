<script lang="ts">
import { Field, Textarea } from "@pisagor/svelte";
</script>

<Field>
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself…" />
      <Field.Description>
        Write a short bio. Maximum 500 characters.
      </Field.Description>
    </Field>
