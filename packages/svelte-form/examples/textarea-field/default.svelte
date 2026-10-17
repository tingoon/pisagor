<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TextareaField } from "@pisagor/svelte-form";
</script>

<TextareaField
  description="Optional. Mention anything the delivery driver should know."
  id="textarea-field-delivery-notes"
  label="Delivery notes"
  placeholder="e.g. Leave at the front desk"
/>
