<script lang="ts">
import { editableRecipe } from "@pisagor/recipes";
import { Button, Editable, Input } from "@pisagor/svelte";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import XIcon from "phosphor-svelte/lib/XIcon";
import { tv } from "tailwind-variants";

const brandEditableRecipe = tv({
  extend: editableRecipe,
  slots: { preview: "text-emerald-700 dark:text-emerald-300" },
  variants: {},
});
</script>

<Editable recipe={brandEditableRecipe}>
  <Editable.Area>
    <Editable.Input>
      <Input />
    </Editable.Input>
    <Editable.Preview />
  </Editable.Area>
  <Editable.Control>
    <Editable.CancelTrigger>
      <Button aria-label="Cancel" size="icon-md" variant="outline">
        <XIcon />
      </Button>
    </Editable.CancelTrigger>
    <Editable.SubmitTrigger>
      <Button aria-label="Save" size="icon-md" variant="outline">
        <CheckIcon />
      </Button>
    </Editable.SubmitTrigger>
  </Editable.Control>
</Editable>
