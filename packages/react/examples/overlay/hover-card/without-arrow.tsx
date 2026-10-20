import { Button, HoverCard } from "@pisagor/react";

export function WithoutArrow() {
  return (
    <HoverCard
      showArrow={false}
      trigger={<Button variant="link">Hover here</Button>}
    >
      <p className="text-muted-foreground text-sm">
        A card without an arrow for flush layouts.
      </p>
    </HoverCard>
  );
}
