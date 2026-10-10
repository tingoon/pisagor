<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { dialogRecipe } from "@pisagor/recipes";
import { Button, Dialog, Field, Input, Select } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandDialogRecipe = tv({
  extend: dialogRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    content: "border-emerald-500/40",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<Dialog.Root recipe={brandDialogRecipe}>
  <Dialog.Trigger>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit project</Dialog.Title>
          <Dialog.Description>
            Make changes to your project settings.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <Field.Set>
            <Field.Group>
              <Field>
                <Field.Label>Name</Field.Label>
                <Input placeholder="Your project" />
              </Field>
              <Field>
                <Field.Label>Main branch</Field.Label>
                <Select
                  items={[
                    { label: "main", value: "main" },
                    { label: "develop", value: "develop" },
                    { label: "feature/123", value: "feature/123" },
                    { label: "release/1.0.0", value: "release/1.0.0" },
                  ]}
                  placeholder="Select branch"
                />
              </Field>
            </Field.Group>
          </Field.Set>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
