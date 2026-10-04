<script lang="ts">
import { TagsInput } from "@pisagor/svelte";
</script>

<TagsInput class="w-full">
  {#each value as tag, index}
    <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
  {/each}
</TagsInput>
