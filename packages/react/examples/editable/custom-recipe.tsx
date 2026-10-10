import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Editable, Input } from "@pisagor/react";
import { editableRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandEditableRecipe = tv({
  extend: editableRecipe,
  slots: { preview: "text-emerald-700 dark:text-emerald-300" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Editable recipe={brandEditableRecipe}>
      <Editable.Area>
        <Editable.Input asChild>
          <Input />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button aria-label="Cancel" size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button aria-label="Save" size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  );
}
