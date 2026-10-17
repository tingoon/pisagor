<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TagsInputField } from "@pisagor/svelte-form";
</script>

<TagsInputField
  disabled
  id="tags-input-field-skills-disabled"
  label="Skills"
  value={["TypeScript"]}
/>
