<script lang="ts">
import { Field } from "@pisagor/svelte";
import { TagsInput } from "@pisagor/svelte/tags-input";


const initialValue = ["React", "Solid"];
let value = $state(initialValue);
</script>

<Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput class="w-full" onValueChange={(v) => (value = v)} value={value}>
        {#each value as tag, index}
          <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
        {/each}
      </TagsInput>
    </Field>
