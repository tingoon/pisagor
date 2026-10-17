<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { OtpField } from "@pisagor/svelte-form";
</script>

<OtpField class="items-center" disabled label="Verification code" />
