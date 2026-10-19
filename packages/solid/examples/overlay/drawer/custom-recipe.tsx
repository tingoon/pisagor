import { Button, Drawer, Field, Input } from "@pisagor/solid";
import { drawerRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandDrawerRecipe = tv({
  extend: drawerRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    grabber: "bg-emerald-500/50",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Drawer
      actions={
        <>
          <Drawer.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Drawer.CloseTrigger
            asChild={(props) => <Button {...props()}>Save changes</Button>}
          />
        </>
      }
      description="Make changes to your account here. Swipe down to close."
      recipe={brandDrawerRecipe}
      title="Edit profile"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input defaultValue="Jane Doe" />
        </Field>
        <Field>
          <Field.Label>Username</Field.Label>
          <Input defaultValue="@jane.doe" />
        </Field>
      </Field.Group>
    </Drawer>
  );
}
