<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { OtpField } from "@pisagor/svelte-form";
</script>

<OtpField
  class="items-center"
  description="Enter the 6-digit code we sent to your phone."
  label="Verification code"
/>
