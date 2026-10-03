<script lang="ts">
import { Kbd } from "@pisagor/svelte";
import { InputGroup } from "@pisagor/svelte/input-group";
</script>

<InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroup.Addon>
    </InputGroup>
