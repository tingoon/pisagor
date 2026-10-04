<script lang="ts">
import { Field, Switch } from "@pisagor/svelte";

let checked = $state(false);

</script>

<Field.Group class="flex flex-col items-center gap-2">
      <Field orientation="horizontal">
        <Switch
          checked={checked}
          onCheckedChange={({ checked }) => checked = checked ?? false}
        />
        <Field.Content>
          <Field.Label>Enable notifications</Field.Label>
        </Field.Content>
      </Field>
      <p class="text-center">{checked ? "✅" : "❌"}</p>
    </Field.Group>
