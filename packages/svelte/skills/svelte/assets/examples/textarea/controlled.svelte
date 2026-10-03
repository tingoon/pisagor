<script lang="ts">
import { Field } from "@pisagor/svelte";
import { Textarea } from "@pisagor/svelte/textarea";

let message = $state("");

</script>

<Field class="flex flex-col gap-3">
      <Textarea
        onChange={({ target }) => message = target.value}
        placeholder="Type your message here"
        value={message}
      />
      <Field.Description class="text-right">
        Character count: {message.length}
      </Field.Description>
    </Field>
