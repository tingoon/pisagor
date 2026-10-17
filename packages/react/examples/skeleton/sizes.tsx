import source from "./sizes.tsx?raw";
import { Skeleton } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <div className="flex items-center gap-2" key={size}>
          <Skeleton.Circle size={size} />
          <Skeleton.Text lines={2} size={size} />
        </div>
      ))}
    </div>
  );
}

export { source as SizesSource };
