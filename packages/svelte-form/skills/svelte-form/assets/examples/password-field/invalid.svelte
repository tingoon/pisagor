<script lang="ts">
import { PasswordField } from "../../../../../src/fields/password-field";
</script>

<PasswordField
  autocomplete="new-password"
  error="Password must be at least 8 characters."
  id="password-field-invalid"
  invalid
  label="Password"
  placeholder="Enter your password"
  value="short"
/>
