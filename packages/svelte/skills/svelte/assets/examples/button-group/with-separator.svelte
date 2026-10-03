<script lang="ts">
import { Button } from "@pisagor/svelte";
import { ButtonGroup } from "@pisagor/svelte/button-group";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
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
