<script lang="ts">
  import { Field, TagsInput } from "@pisagor/svelte";

  let value = $state<string[]>([]);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <TagsInput addOnPaste class="w-full" delimiter="," {value} />
</Field>
