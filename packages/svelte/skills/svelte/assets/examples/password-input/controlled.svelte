<script lang="ts">
import { PasswordInput } from "@pisagor/svelte/password-input";

let password = $state("");

</script>

<PasswordInput
      onChange={(event) => password = event.target.value}
      placeholder="Enter password"
      value={password}
    />
