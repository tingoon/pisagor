import source from "./without-arrow.tsx?raw";
import { Button, HoverCard } from "@pisagor/react";

export function WithoutArrow() {
  return (
    <HoverCard>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content showArrow={false}>
        <p className="text-muted-foreground text-sm">
          A card without an arrow for flush layouts.
        </p>
      </HoverCard.Content>
    </HoverCard>
  );
}

export { source as WithoutArrowSource };
