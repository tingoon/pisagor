<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DatePicker } from "@pisagor/svelte";
</script>

<DatePicker>
  <DatePicker.Input clearable placeholder="Pick a date" />
  <DatePicker.Content />
</DatePicker>
