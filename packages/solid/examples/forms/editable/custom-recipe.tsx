import { CheckIcon, XIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Editable, Input } from "@pisagor/solid";
import { editableRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandEditableRecipe = tv({
  extend: editableRecipe,
  slots: { preview: "text-emerald-700 dark:text-emerald-300" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Editable.Root recipe={brandEditableRecipe}>
      <Editable.Area>
        <Editable.Input asChild={(props) => <Input {...props()} />} />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Cancel"
              size="icon-md"
              variant="outline"
            >
              <XIcon />
            </Button>
          )}
        />
        <Editable.SubmitTrigger
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Save"
              size="icon-md"
              variant="outline"
            >
              <CheckIcon />
            </Button>
          )}
        />
      </Editable.Control>
    </Editable.Root>
  );
}
