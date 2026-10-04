<script lang="ts">
import { TagsInput } from "@pisagor/svelte";

const defaultValue = ["React", "Solid"];
</script>

<div class="flex flex-col gap-2">
  <TagsInput class="w-full" value={defaultValue} variant="primary">
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
  <TagsInput class="w-full" value={defaultValue} variant="secondary">
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</div>
