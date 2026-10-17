<script module lang="ts">
  import source from "./max-with-overflow.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  let value = $state(["React", "Solid", "Vue"]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput allowOverflow class="w-full" max={3} {value}>
    {#each value as tag, index}
      <TagsInput.Item {index} value={tag}>{tag}</TagsInput.Item>
    {/each}
  </TagsInput>
</Field>
