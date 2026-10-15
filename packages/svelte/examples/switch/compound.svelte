<script lang="ts">
import { Field, Switch } from "@pisagor/svelte";
</script>

<Field class="flex-row items-center gap-2">
  <Switch.Root defaultChecked>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.HiddenInput />
  </Switch.Root>
  <Field.Label>Airplane mode</Field.Label>
</Field>
