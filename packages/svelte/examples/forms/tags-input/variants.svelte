<script lang="ts">
  import { TagsInput } from "@pisagor/svelte";

  const defaultValue = ["React", "Solid"];
</script>

<div class="flex flex-col gap-2">
  <TagsInput class="w-full" value={defaultValue} variant="primary" />
  <TagsInput class="w-full" value={defaultValue} variant="secondary" />
</div>
