<script lang="ts">
import { PhoneInput } from "@pisagor/svelte/phone-input";
</script>

<div class="flex flex-col gap-2">
      <PhoneInput defaultCountry="NL" placeholder="Primary" variant="primary" />
      <PhoneInput
        defaultCountry="NL"
        placeholder="Secondary"
        variant="secondary"
      />
    </div>
