import source from "./sizes.tsx?raw";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { EmptyState } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <EmptyState
          description="No items match your current filters."
          key={size}
          media={<MagnifyingGlassIcon />}
          size={size}
          title="No projects found"
        />
      ))}
    </div>
  );
}

export { source as SizesSource };
