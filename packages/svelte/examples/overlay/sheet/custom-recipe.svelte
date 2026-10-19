<script lang="ts">
  import { sheetRecipe } from "@pisagor/recipes";
  import { Button, Field, Input, Sheet } from "@pisagor/svelte";
  import { tv } from "tailwind-variants";

  const brandSheetRecipe = tv({
    extend: sheetRecipe,
    slots: { content: "border-emerald-500/40" },
    variants: {},
  });
</script>

<Sheet
  description="Make changes to your account here. Click save when you're done."
  recipe={brandSheetRecipe}
  title="Edit user"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Cancel</Button>
      {/snippet}
    </Sheet.CloseTrigger>
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Save changes</Button>
      {/snippet}
    </Sheet.CloseTrigger>
  {/snippet}

  <Field.Group>
    <Field>
      <Field.Label>Name</Field.Label>
      <Input value="Jane Doe" />
    </Field>
    <Field>
      <Field.Label>Username</Field.Label>
      <Input value="@jane.doe" />
    </Field>
  </Field.Group>
</Sheet>
