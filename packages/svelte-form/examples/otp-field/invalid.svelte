<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { OtpField } from "@pisagor/svelte-form";
</script>

<OtpField
  class="items-center"
  error="Enter the 6-digit code from your email."
  invalid
  label="Verification code"
  value="123"
/>
