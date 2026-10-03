<script lang="ts">
import { Field } from "@pisagor/svelte";
import { TagsInput } from "@pisagor/svelte/tags-input";
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
