import { Button } from "../../button";
import { EmptyState } from "../index";

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
      media={
        <svg
          aria-hidden="true"
          fill="none"
          height="1em"
          viewBox="0 0 256 256"
          width="1em"
        >
          <path
            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            fill="currentColor"
          />
        </svg>
      }
      title="No projects found"
    />
  );
}
