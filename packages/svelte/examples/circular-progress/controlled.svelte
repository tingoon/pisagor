<script lang="ts">
import { Button, ButtonGroup, CircularProgress } from "@pisagor/svelte";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";

let value = $state(55);

</script>

<div class="flex flex-col items-center gap-2">
      <ButtonGroup>
        <Button
          aria-label="Decrease"
          onClick={() => value = Math.max(0, value - 10)}
          size="icon-sm"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <Button
          aria-label="Increase"
          onClick={() => value = Math.min(100, value + 10)}
          size="icon-sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <CircularProgress value={value} />
    </div>
