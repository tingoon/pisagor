<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TextareaField } from "@pisagor/svelte-form";
</script>

<TextareaField
  disabled
  id="textarea-field-bio-disabled"
  label="Bio"
  placeholder="Tell us about yourself…"
/>
