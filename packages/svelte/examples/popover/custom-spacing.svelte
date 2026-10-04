<script lang="ts">
import { Button, Field, Input } from "@pisagor/svelte";
import { Popover } from "@pisagor/svelte/popover";
</script>

<Popover>
      <Popover.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </Popover.Trigger>
      <Popover.Content class="w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]">
        <Popover.Header
          description="Set the dimensions for the layer."
          title="Dimensions"
        />
        <Popover.Body>
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
        </Popover.Body>
      </Popover.Content>
    </Popover>
