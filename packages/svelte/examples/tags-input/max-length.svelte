<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";
</script>

<Field>
      <Field.Label>Frameworks (max 10 chars)</Field.Label>
      <TagsInput class="w-full" maxLength={10} value={["React"]} >
        {#each value as tag, index}
          <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
        {/each}
      </TagsInput>
    </Field>
