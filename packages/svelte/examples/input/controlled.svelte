<script lang="ts">
import { Input } from "@pisagor/svelte";

let value = $state("");

</script>

<Input
      onChange={({ target }) => value = target.value}
      placeholder="Enter your message"
      value={value}
    />
