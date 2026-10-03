<script lang="ts">
import { Field } from "@pisagor/svelte";
import { Checkbox } from "@pisagor/svelte/checkbox";
</script>

<Field.Group>
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Select all items</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
