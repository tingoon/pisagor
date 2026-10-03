<script lang="ts">
import { Field } from "@pisagor/svelte";
import { TagsInput } from "@pisagor/svelte/tags-input";
</script>

<Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput class="w-full" maxLength={10} value={["React"]} >
        {#each value as tag, index}
          <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
        {/each}
      </TagsInput>
    </Field>
