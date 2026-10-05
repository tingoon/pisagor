<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";

let value = $state(["React", "Solid"]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput class="w-full" editable={false} {value}>
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</Field>
