<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RadioGroupField } from "@pisagor/svelte-form";
  import { planOptions } from "../options";
</script>

<RadioGroupField
  defaultValue="starter"
  description="You can upgrade or downgrade at any time."
  id="radio-group-field-subscription"
  label="Subscription"
  options={planOptions}
/>
