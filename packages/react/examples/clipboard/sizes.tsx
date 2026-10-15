import { Clipboard } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {sizes.map((size) => (
        <Clipboard key={size} size={size} value="https://example.com/docs" />
      ))}
    </div>
  );
}
