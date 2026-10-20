<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  let value = $state(["React", "Solid", "Vue"]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput allowOverflow class="w-full" max={3} {value} />
</Field>
