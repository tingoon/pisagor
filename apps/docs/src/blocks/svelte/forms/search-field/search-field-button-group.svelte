<script lang="ts">
  import { Button, ButtonGroup, Input } from "@pisagor/svelte";
  import { MagnifyingGlassIcon } from "phosphor-svelte";
</script>

<ButtonGroup>
  <Input placeholder="Search..." type="search" />
  <Button variant="outline">
    <MagnifyingGlassIcon />
  </Button>
</ButtonGroup>
