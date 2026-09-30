<script lang="ts">
import { PasswordField } from "../../../../../src/fields/password-field";
</script>

{#snippet accessory()}
  <a
    class="ml-auto text-sm underline-offset-4 hover:underline"
    href="https://example.com/forgot-password"
  >
    Forgot password?
  </a>
{/snippet}

<PasswordField
  autocomplete="current-password"
  id="password-field-accessory"
  label="Password"
  labelAccessory={accessory}
  labelProps={{ class: "w-full" }}
  placeholder="Enter your password"
/>
