import { switchRecipe } from "@pisagor/recipes";
import { Field, Switch } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandSwitchRecipe = tv({
  extend: switchRecipe,
  slots: { base: "data-[state=checked]:bg-emerald-600" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Field orientation="horizontal">
      <Switch recipe={brandSwitchRecipe} />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
