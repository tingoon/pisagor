import { Frame } from "@pisagor/react";
import { frameRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandFrameRecipe = tv({
  extend: frameRecipe,
  slots: {
    base: "border-emerald-500/40 bg-emerald-500/5",
    panelTitle: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Frame recipe={brandFrameRecipe}>
      <Frame.Header>
        <Frame.Title>Section header</Frame.Title>
        <Frame.Description>
          Brief description about the section
        </Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <h2 className="font-semibold text-sm">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </Frame.Panel>
      <Frame.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Frame.Footer>
    </Frame>
  );
}
