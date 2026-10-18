<script lang="ts">
  import { Button, ButtonGroup } from "@pisagor/svelte";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
</script>

<ButtonGroup>
  <Button aria-label="Remove" size="icon-md" variant="secondary">
    <MinusIcon />
  </Button>
  <ButtonGroup.Separator />
  <Button aria-label="Add" size="icon-md" variant="secondary">
    <PlusIcon />
  </Button>
</ButtonGroup>
