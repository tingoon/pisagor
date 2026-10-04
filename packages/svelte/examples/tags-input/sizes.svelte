<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";

const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex w-full flex-col gap-4">
  {#each sizes as size}
    <Field>
      <Field.Label class="capitalize">{size}</Field.Label>
      <TagsInput class="w-full" defaultValue={["React", "Solid"]} {size} />
    </Field>
  {/each}
</div>
