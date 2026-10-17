<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DateField } from "@pisagor/svelte-form";
</script>

<DateField
  error="Please choose a date."
  id="date-field-start-date-invalid"
  invalid
  label="Start date"
/>
