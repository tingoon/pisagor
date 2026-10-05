<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";

let value = $state(["react"]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput
    class="w-full"
    sanitizeValue={(value) => value.trim().toLowerCase()}
    {value}
  >
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</Field>
