<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TagsInputField } from "@pisagor/svelte-form";
</script>

<TagsInputField
  error="Add at least one skill."
  id="tags-input-field-skills-invalid"
  invalid
  label="Skills"
/>
