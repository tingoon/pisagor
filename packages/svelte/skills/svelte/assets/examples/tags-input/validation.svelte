<script lang="ts">
import { Field } from "@pisagor/svelte";
import { TagsInput } from "@pisagor/svelte/tags-input";

const validTagPattern = /^[a-zA-Z0-9-]+$/;
</script>

<Field>
      <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
      <TagsInput
        class="w-full"
        validate={({ value, inputValue }) => {
          const next = inputValue.trim();
          return (
            Boolean(next) &&
            !value.includes(next) &&
            next.length >= 3 &&
            validTagPattern.test(next)
          );
        }}
      >
        {#each value as tag, index}
          <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
        {/each}
      </TagsInput>
    </Field>
