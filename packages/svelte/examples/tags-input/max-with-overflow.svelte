<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput
    allowOverflow
    class="w-full"
    max={3}
    value={["React", "Solid", "Vue"]}
  >
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</Field>
