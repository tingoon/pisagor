<script lang="ts">
import { Field } from "@pisagor/svelte/field";
import { TagsInput } from "@pisagor/svelte/tags-input";

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
