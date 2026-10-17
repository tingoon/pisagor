<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TextField } from "@pisagor/svelte-form";
</script>

<TextField
  autocomplete="name"
  description="As it should appear on your invoices."
  id="text-field-full-name"
  label="Full name"
  placeholder="Jane Doe"
/>
