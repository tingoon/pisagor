import { listboxRecipe } from "@pisagor/recipes";
import { Listbox } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandListboxRecipe = tv({
  extend: listboxRecipe,
  slots: { content: "rounded-xl border border-emerald-500/30 p-1" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Listbox
      defaultValue={["br"]}
      items={[
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ]}
      recipe={brandListboxRecipe}
    />
  );
}
