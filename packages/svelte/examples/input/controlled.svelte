<script lang="ts">
import { Input } from "@pisagor/svelte/input";

let value = $state("");

</script>

<Input
      onChange={({ target }) => value = target.value}
      placeholder="Enter your message"
      value={value}
    />
