<script lang="ts">
import { Button, Field, Input } from "@pisagor/svelte";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
</script>

<Field orientation="horizontal">
  <Input placeholder="Search..." />
  <Button aria-label="Search" size="icon-md">
    <MagnifyingGlassIcon />
  </Button>
</Field>
