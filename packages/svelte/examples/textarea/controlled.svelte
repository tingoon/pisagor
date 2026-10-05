<script lang="ts">
import { Field, Textarea } from "@pisagor/svelte";

let message = $state("");
</script>

<Field class="flex flex-col gap-3">
  <Textarea
    onValueChange={(next) => (message = next)}
    placeholder="Type your message here"
    value={message}
  />
  <Field.Description class="text-right">
    Character count: {message.length}
  </Field.Description>
</Field>
