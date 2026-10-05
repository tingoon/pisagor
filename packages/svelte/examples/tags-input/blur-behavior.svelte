<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";

let value = $state(["React"]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput blurBehavior="add" class="w-full" {value}>
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</Field>
