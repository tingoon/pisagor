import { actionBarRecipe } from "@pisagor/recipes";
import { ActionBar, Button } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandActionBarRecipe = tv({
  extend: actionBarRecipe,
  slots: { content: "border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ActionBar recipe={brandActionBarRecipe}>
      <ActionBar.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost">Export</Button>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close>×</ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  );
}
