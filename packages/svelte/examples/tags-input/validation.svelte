<script lang="ts">
import { Field, TagsInput } from "@pisagor/svelte";

const validTagPattern = /^[a-zA-Z0-9-]+$/;

function validateTag({
  value,
  inputValue,
}: {
  value: string[];
  inputValue: string;
}) {
  const next = inputValue.trim();
  return (
    Boolean(next) &&
    !value.includes(next) &&
    next.length >= 3 &&
    validTagPattern.test(next)
  );
}
</script>

<Field>
  <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
  <TagsInput class="w-full" validate={validateTag} />
</Field>
