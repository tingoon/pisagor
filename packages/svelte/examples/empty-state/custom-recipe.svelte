<script lang="ts">
import { emptyStateRecipe } from "@pisagor/recipes";
import { Button, EmptyState } from "@pisagor/svelte";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import { tv } from "tailwind-variants";

const brandEmptyStateRecipe = tv({
  extend: emptyStateRecipe,
  slots: {
    media: "bg-emerald-500/10 text-emerald-600",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<EmptyState
  description="No items match your current filters. Try clearing filters or creating a new project."
  recipe={brandEmptyStateRecipe}
  title="No projects found"
>
  {#snippet media()}
    <MagnifyingGlassIcon />
  {/snippet}
  {#snippet actions()}
    <Button>Create project</Button>
    <Button variant="outline">Clear filters</Button>
  {/snippet}
</EmptyState>
