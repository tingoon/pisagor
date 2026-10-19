<script lang="ts">
  import { drawerRecipe } from "@pisagor/recipes";
  import { Button, Drawer, Field, Input } from "@pisagor/svelte";
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
</script>

<Drawer
  description="Make changes to your account here. Swipe down to close."
  recipe={brandDrawerRecipe}
  title="Edit profile"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Drawer.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Cancel</Button>
      {/snippet}
    </Drawer.CloseTrigger>
    <Drawer.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Save changes</Button>
      {/snippet}
    </Drawer.CloseTrigger>
  {/snippet}

  <Field.Group>
    <Field>
      <Field.Label>Name</Field.Label>
      <Input value="Jane Doe" />
    </Field>
    <Field>
      <Field.Label>Username</Field.Label>
      <Input value="@jane.doe" />
    </Field>
  </Field.Group>
</Drawer>
