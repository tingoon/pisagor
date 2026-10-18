import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button, EmptyState } from "@pisagor/react";
import { emptyStateRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandEmptyStateRecipe = tv({
  extend: emptyStateRecipe,
  slots: {
    media: "bg-emerald-500/10 text-emerald-600",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <EmptyState
      actions={
        <>
          <Button>Create project</Button>
          <Button variant="outline">Clear filters</Button>
        </>
      }
      description="No items match your current filters. Try clearing filters or creating a new project."
      media={<MagnifyingGlassIcon />}
      recipe={brandEmptyStateRecipe}
      title="No projects found"
    />
  );
}
