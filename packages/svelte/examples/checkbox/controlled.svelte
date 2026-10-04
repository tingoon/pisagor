<script lang="ts">
import type { CheckboxCheckedState } from "@pisagor/svelte";
import { Checkbox, Field } from "@pisagor/svelte";

let checked: CheckboxCheckedState = $state(false);

</script>

<Field.Group>
      <Field orientation="horizontal">
        <Checkbox
          checked={checked}
          onCheckedChange={(d) => { checked = d.checked }}
        />
        <Field.Label>Accept terms and conditions</Field.Label>
      </Field>
      <p class="text-center">{checked ? "✅" : "❌"}</p>
    </Field.Group>
