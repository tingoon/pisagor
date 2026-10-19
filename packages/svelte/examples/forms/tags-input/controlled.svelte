<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  const initialValue = ["React", "Solid"];
  let value = $state(initialValue);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput class="w-full" onValueChange={(v) => (value = v)} {value} />
</Field>
