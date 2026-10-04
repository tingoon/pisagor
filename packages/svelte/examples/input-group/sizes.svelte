<script lang="ts">
import { InputGroup } from "@pisagor/svelte";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
</script>

<div class="flex flex-col gap-2">
  <InputGroup size="sm">
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <MagnifyingGlassIcon aria-hidden />
    </InputGroup.Addon>
  </InputGroup>
  <InputGroup size="md">
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <MagnifyingGlassIcon aria-hidden />
    </InputGroup.Addon>
  </InputGroup>
  <InputGroup size="lg">
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <MagnifyingGlassIcon aria-hidden />
    </InputGroup.Addon>
  </InputGroup>
</div>
