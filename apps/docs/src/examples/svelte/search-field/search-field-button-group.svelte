<script module lang="ts">
  import source from "./search-field-button-group.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, ButtonGroup, Input } from "@pisagor/svelte";
  import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
</script>

<ButtonGroup>
  <Input placeholder="Search..." type="search" />
  <Button variant="outline">
    <MagnifyingGlassIcon />
  </Button>
</ButtonGroup>
