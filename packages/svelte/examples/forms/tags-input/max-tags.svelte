<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  let value = $state(["React", "Solid"]);
</script>

<Field>
  <Field.Label>Frameworks (max 3)</Field.Label>
  <TagsInput class="w-full" max={3} {value} />
</Field>
