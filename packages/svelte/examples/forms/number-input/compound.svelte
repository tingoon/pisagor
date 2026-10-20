<script lang="ts">
  import { Button, Input, NumberInput } from "@pisagor/svelte";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
</script>

<NumberInput.Root defaultValue="1">
  <NumberInput.Control>
    <NumberInput.DecrementTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="ghost">
          <MinusIcon aria-hidden="true" />
        </Button>
      {/snippet}
    </NumberInput.DecrementTrigger>
    <NumberInput.Input>
      {#snippet asChild(props)}
        <Input {...props()} />
      {/snippet}
    </NumberInput.Input>
    <NumberInput.IncrementTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="ghost">
          <PlusIcon aria-hidden="true" />
        </Button>
      {/snippet}
    </NumberInput.IncrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
