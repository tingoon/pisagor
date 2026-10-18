<script lang="ts">
  import { buttonGroupRecipe } from "@pisagor/recipes";
  import { Button, ButtonGroup } from "@pisagor/svelte";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
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
