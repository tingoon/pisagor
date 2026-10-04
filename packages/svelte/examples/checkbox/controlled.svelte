<script lang="ts">
import { Field } from "@pisagor/svelte";
import type { CheckboxCheckedState } from "@pisagor/svelte/checkbox";
import { Checkbox } from "@pisagor/svelte/checkbox";

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
