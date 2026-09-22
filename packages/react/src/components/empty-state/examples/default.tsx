import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { EmptyState } from "..";
export function Default() {
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
      title="No projects found"
    />
  );
}
