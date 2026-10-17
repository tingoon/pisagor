<script module lang="ts">
  import source from "./time.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { DatePicker, Field } from "@pisagor/svelte";
</script>

<Field>
  <Field.Label>Time</Field.Label>
  <DatePicker.TimeInput />
</Field>
