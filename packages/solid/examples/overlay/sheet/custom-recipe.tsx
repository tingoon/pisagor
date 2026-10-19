import { Button, Field, Input, Sheet } from "@pisagor/solid";
import { sheetRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSheetRecipe = tv({
  extend: sheetRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Sheet
      actions={
        <>
          <Sheet.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Sheet.CloseTrigger
            asChild={(props) => <Button {...props()}>Save changes</Button>}
          />
        </>
      }
      description="Make changes to your account here. Click save when you're done."
      recipe={brandSheetRecipe}
      title="Edit user"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
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
    </Sheet>
  );
}
