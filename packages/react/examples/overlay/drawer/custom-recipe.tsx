import { Button, Drawer, Field, Input } from "@pisagor/react";
import { drawerRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandDrawerRecipe = tv({
  extend: drawerRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    grabberIcon: "bg-emerald-500/50",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Drawer recipe={brandDrawerRecipe}>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Make changes to your account here. Swipe down to close."
            title="Edit profile"
          />
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Drawer.CloseTrigger asChild>
              <Button>Save changes</Button>
            </Drawer.CloseTrigger>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
