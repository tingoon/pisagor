<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CheckboxField } from "@pisagor/svelte-form";
</script>

<CheckboxField
  description="We'll send product news about once a month."
  id="checkbox-field-newsletter"
  label="Subscribe to the newsletter"
/>
