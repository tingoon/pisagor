<script lang="ts">
import { InputOTP } from "@pisagor/svelte/input-otp";
</script>

<div class="flex flex-col gap-2">
      <InputOTP variant="primary">
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Separator />
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP>
      <InputOTP variant="secondary">
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Separator />
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP>
    </div>
