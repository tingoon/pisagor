<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  let value = $state(["React"]);
</script>

<Field>
  <Field.Label>Frameworks (max 10 chars)</Field.Label>
  <TagsInput class="w-full" maxLength={10} {value} />
</Field>
