<script lang="ts">
  import { Button, Field, Input, Popover } from "@pisagor/svelte";
</script>

<Popover
  classNames={{ base: "w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]" }}
  description="Set the dimensions for the layer."
  title="Dimensions"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <Field.Group class="gap-2">
    <Field class="grid grid-cols-3 items-center gap-2">
      <Field.Label>Width</Field.Label>
      <Input class="col-span-2" value="100%" />
    </Field>
    <Field class="grid grid-cols-3 items-center gap-2">
      <Field.Label>Max. width</Field.Label>
      <Input class="col-span-2" value="300px" />
    </Field>
  </Field.Group>
</Popover>
