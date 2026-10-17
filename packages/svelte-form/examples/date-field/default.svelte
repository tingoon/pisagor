<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DateField } from "@pisagor/svelte-form";
</script>

<DateField
  description="Used to send you a birthday discount."
  id="date-field-birthday"
  label="Date of birth"
  placeholder="MM/DD/YYYY"
/>
