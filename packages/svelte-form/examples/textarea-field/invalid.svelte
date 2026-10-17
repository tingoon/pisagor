<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TextareaField } from "@pisagor/svelte-form";
</script>

<TextareaField
  error="Please enter a short bio."
  id="textarea-field-bio-invalid"
  invalid
  label="Bio"
  placeholder="Tell us about yourself…"
/>
