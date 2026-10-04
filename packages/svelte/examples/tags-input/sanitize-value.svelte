<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput
    class="w-full"
    sanitizeValue={(value) => value.trim().toLowerCase()}
    value={["react"]}
  >
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</Field>
