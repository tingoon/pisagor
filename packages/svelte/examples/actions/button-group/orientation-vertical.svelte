<script lang="ts">
  import { Button, ButtonGroup } from "@pisagor/svelte";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
</script>

<ButtonGroup>
  <Button aria-label="Add" size="icon-md" variant="outline">
    <PlusIcon />
  </Button>
  <Button aria-label="Remove" size="icon-md" variant="outline">
    <MinusIcon />
  </Button>
</ButtonGroup>
