<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import { Field } from "@pisagor/svelte/field";
import { TagsInput } from "@pisagor/svelte/tags-input";

let inputValue = $state("");
</script>

<div class="flex flex-col gap-3">
  <div class="flex flex-wrap gap-2">
    <Button onclick={() => (inputValue = "React")} size="sm" variant="outline">
      Set &quot;React&quot;
    </Button>
    <Button onclick={() => (inputValue = "")} size="sm" variant="outline">Clear</Button>
  </div>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput
      class="w-full"
      {inputValue}
      onInputValueChange={(details) => (inputValue = details.inputValue)}
      value={["React"]}
    />
  </Field>
</div>
