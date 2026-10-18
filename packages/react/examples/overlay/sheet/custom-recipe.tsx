import { Button, Field, Input, Sheet } from "@pisagor/react";
import { sheetRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSheetRecipe = tv({
  extend: sheetRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Sheet recipe={brandSheetRecipe}>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit user</Sheet.Title>
          <Sheet.Description>
            Make changes to your account here. Click save when you're done.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Input defaultValue="@jane.doe" />
            </Field>
          </Field.Group>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
