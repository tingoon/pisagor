<script lang="ts">
import { Checkbox } from "@pisagor/svelte";
import { Field } from "@pisagor/svelte/field";
</script>

<Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Label>Receive notifications</Field.Label>
        <Field.Description>
          You'll receive a notification when someone posts a comment
        </Field.Description>
      </Field.Content>
    </Field>
