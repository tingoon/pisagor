<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { InputGroup } from "@pisagor/svelte";
  import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
</script>

<div class="flex flex-col gap-2">
  <InputGroup variant="primary">
    <InputGroup.Input placeholder="Primary" />
    <InputGroup.Addon>
      <MagnifyingGlassIcon aria-hidden />
    </InputGroup.Addon>
  </InputGroup>
  <InputGroup variant="secondary">
    <InputGroup.Input placeholder="Secondary" />
    <InputGroup.Addon>
      <MagnifyingGlassIcon aria-hidden />
    </InputGroup.Addon>
  </InputGroup>
</div>
