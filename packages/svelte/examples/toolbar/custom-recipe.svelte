<script lang="ts">
import { toolbarRecipe } from "@pisagor/recipes";
import { Button, Toolbar } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandToolbarRecipe = tv({
  extend: toolbarRecipe,
  slots: {
    base: "border-emerald-500/30",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<Toolbar
  description="Manage deployments and monitor activity."
  recipe={brandToolbarRecipe}
  title="Projects"
>
  {#snippet actions()}
    <Button variant="outline">Import</Button>
    <Button>New project</Button>
  {/snippet}
</Toolbar>
