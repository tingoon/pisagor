<script lang="ts">
import { Button, ButtonGroup, Field, Progress } from "@pisagor/svelte";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";

let value = $state(50);
</script>

<Field>
  <Field.Label class="flex items-center gap-2">
    Controlled progress
    <ButtonGroup class="ml-auto">
      <Button
        aria-label="Decrease"
        onClick={() => (value = Math.max(0, value - 10))}
        size="icon-sm"
        variant="outline"
      >
        <MinusIcon />
      </Button>
      <Button
        aria-label="Increase"
        onClick={() => (value = Math.min(100, value + 10))}
        size="icon-sm"
        variant="outline"
      >
        <PlusIcon />
      </Button>
    </ButtonGroup>
  </Field.Label>
  <Progress {value} />
</Field>
