<script lang="ts">
import { buttonGroupRecipe } from "@pisagor/recipes";
import { Button, ButtonGroup } from "@pisagor/svelte";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
import { tv } from "tailwind-variants";

const brandButtonGroupRecipe = tv({
  extend: buttonGroupRecipe,
  slots: { separator: "bg-emerald-500/60" },
  variants: {},
});
</script>

<ButtonGroup recipe={brandButtonGroupRecipe}>
  <Button aria-label="Remove" size="icon-md" variant="secondary">
    <MinusIcon />
  </Button>
  <ButtonGroup.Separator />
  <Button aria-label="Add" size="icon-md" variant="secondary">
    <PlusIcon />
  </Button>
</ButtonGroup>
