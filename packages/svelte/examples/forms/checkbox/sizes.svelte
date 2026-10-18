<script lang="ts">
  import { Checkbox, Field } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <Field orientation="horizontal">
      <Checkbox defaultChecked {size} />
      <Field.Label>Size {size}</Field.Label>
    </Field>
  {/each}
</div>
