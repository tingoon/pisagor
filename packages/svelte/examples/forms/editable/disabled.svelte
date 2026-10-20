<script lang="ts">
  import { Button, Editable } from "@pisagor/svelte";
  import { CheckIcon, XIcon } from "phosphor-svelte";
</script>

<Editable.Root>
  <Editable.Area>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>
  <Editable.Control>
    <Editable.CancelTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          aria-label="Cancel"
          size="icon-md"
          variant="outline"
        >
          <XIcon />
        </Button>
      {/snippet}
    </Editable.CancelTrigger>
    <Editable.SubmitTrigger>
      {#snippet asChild(props)}
        <Button {...props()} aria-label="Save" size="icon-md" variant="outline">
          <CheckIcon />
        </Button>
      {/snippet}
    </Editable.SubmitTrigger>
  </Editable.Control>
</Editable.Root>
