<script module lang="ts">
  import source from "./with-placeholder.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { InputOTP } from "@pisagor/svelte";
</script>

<InputOTP>
  <InputOTP.Slot index={0} />
  <InputOTP.Slot index={1} />
  <InputOTP.Slot index={2} />
  <InputOTP.Slot index={3} />
</InputOTP>
