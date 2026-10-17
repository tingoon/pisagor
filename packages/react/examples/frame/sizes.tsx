import source from "./sizes.tsx?raw";
import { Frame } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Frame key={size} size={size}>
          <Frame.Header>
            <Frame.Title>Section {size}</Frame.Title>
          </Frame.Header>
          <Frame.Panel>
            <p className="text-muted-foreground text-sm">Section content</p>
          </Frame.Panel>
        </Frame>
      ))}
    </div>
  );
}

export { source as SizesSource };
