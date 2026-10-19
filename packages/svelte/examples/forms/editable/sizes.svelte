<script lang="ts">
  import { Button, Editable, Input } from "@pisagor/svelte";
  import { CheckIcon, XIcon } from "phosphor-svelte";
</script>

<div class="flex flex-col gap-2">
  <Editable.Root value="Editable content">
    <Editable.Area>
      <Editable.Input>
        {#snippet asChild(props)}
          <Input {...props()} size="sm" />
        {/snippet}
      </Editable.Input>
      <Editable.Preview size="sm" />
    </Editable.Area>
    <Editable.Control>
      <Editable.CancelTrigger>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label="Cancel"
            size="icon-sm"
            variant="outline"
          >
            <XIcon />
          </Button>
        {/snippet}
      </Editable.CancelTrigger>
      <Editable.SubmitTrigger>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label="Save"
            size="icon-sm"
            variant="outline"
          >
            <CheckIcon />
          </Button>
        {/snippet}
      </Editable.SubmitTrigger>
    </Editable.Control>
  </Editable.Root>
  <Editable.Root value="Editable content">
    <Editable.Area>
      <Editable.Input>
        {#snippet asChild(props)}
          <Input {...props()} size="md" />
        {/snippet}
      </Editable.Input>
      <Editable.Preview size="md" />
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
          <Button
            {...props()}
            aria-label="Save"
            size="icon-md"
            variant="outline"
          >
            <CheckIcon />
          </Button>
        {/snippet}
      </Editable.SubmitTrigger>
    </Editable.Control>
  </Editable.Root>
  <Editable.Root value="Editable content">
    <Editable.Area>
      <Editable.Input>
        {#snippet asChild(props)}
          <Input {...props()} size="lg" />
        {/snippet}
      </Editable.Input>
      <Editable.Preview size="lg" />
    </Editable.Area>
    <Editable.Control>
      <Editable.CancelTrigger>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label="Cancel"
            size="icon-lg"
            variant="outline"
          >
            <XIcon />
          </Button>
        {/snippet}
      </Editable.CancelTrigger>
      <Editable.SubmitTrigger>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label="Save"
            size="icon-lg"
            variant="outline"
          >
            <CheckIcon />
          </Button>
        {/snippet}
      </Editable.SubmitTrigger>
    </Editable.Control>
  </Editable.Root>
</div>
