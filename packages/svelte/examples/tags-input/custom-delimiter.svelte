<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";

const tagDelimiter = /[,\s]+/;
</script>

<Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        delimiter={tagDelimiter}
        value={["React"]}
      >
        {#each value as tag, index}
          <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
        {/each}
      </TagsInput>
    </Field>
