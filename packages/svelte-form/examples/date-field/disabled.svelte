<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DateField } from "@pisagor/svelte-form";
</script>

<DateField
  description="Pick your preferred project kickoff date."
  disabled
  id="date-field-start-date-disabled"
  label="Start date"
  placeholder="Select a date"
/>
