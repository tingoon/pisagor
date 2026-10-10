<script lang="ts">
import { NumberField } from "@pisagor/svelte-form";
</script>

<NumberField
  defaultValue="2"
  description="Up to 8 guests per booking."
  id="number-field-guests"
  label="Guests"
  max={8}
  min={1}
/>
