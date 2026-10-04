<script lang="ts">
import { Spinner } from "@pisagor/svelte";
import { InputGroup } from "@pisagor/svelte/input-group";
</script>

<InputGroup data-disabled>
      <InputGroup.Input disabled placeholder="Loading..." />
      <InputGroup.Addon align="inline-end">
        <Spinner aria-label="Loading" />
      </InputGroup.Addon>
    </InputGroup>
