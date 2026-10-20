<script lang="ts">
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

<Dialog
  description="Make changes to your project settings."
  recipe={brandDialogRecipe}
  title="Edit project"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Cancel</Button>
      {/snippet}
    </Dialog.CloseTrigger>
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Save</Button>
      {/snippet}
    </Dialog.CloseTrigger>
  {/snippet}

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
</Dialog>
