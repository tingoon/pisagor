<script lang="ts">
  import { InputGroup } from "@pisagor/svelte";
  import { MagnifyingGlassIcon } from "phosphor-svelte";
</script>

<InputGroup>
  <InputGroup.Input disabled placeholder="Search..." />
  <InputGroup.Addon>
    <MagnifyingGlassIcon aria-hidden />
  </InputGroup.Addon>
</InputGroup>
