<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  let value = $state(["React", "Solid"]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput class="w-full" editable={false} {value} />
</Field>
