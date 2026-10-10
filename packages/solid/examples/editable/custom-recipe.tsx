import { editableRecipe } from "@pisagor/recipes";
import { Button, Editable } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandEditableRecipe = tv({
  extend: editableRecipe,
  slots: { preview: "text-emerald-700 dark:text-emerald-300" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Editable defaultValue="Click to edit" recipe={brandEditableRecipe}>
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger
          asChild={(props) => (
            <Button {...props()} size="sm" variant="ghost">
              Edit
            </Button>
          )}
        />
        <Editable.CancelTrigger
          asChild={(props) => (
            <Button {...props()} size="sm" variant="ghost">
              Cancel
            </Button>
          )}
        />
        <Editable.SubmitTrigger
          asChild={(props) => (
            <Button {...props()} size="sm">
              Save
            </Button>
          )}
        />
      </Editable.Control>
    </Editable>
  );
}
