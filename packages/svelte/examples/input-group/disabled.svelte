<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { InputGroup } from "@pisagor/svelte";
  import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
</script>

<InputGroup>
  <InputGroup.Input disabled placeholder="Search..." />
  <InputGroup.Addon>
    <MagnifyingGlassIcon aria-hidden />
  </InputGroup.Addon>
</InputGroup>
