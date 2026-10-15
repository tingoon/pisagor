import { Button, ButtonGroup } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div className="flex flex-col items-start gap-2">
      {sizes.map((size) => (
        <ButtonGroup key={size} size={size}>
          <Button size={size} variant="outline">
            Archive
          </Button>
          <Button size={size} variant="outline">
            Report
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
}
