import source from "./without-arrow.tsx?raw";
import { Button, HoverCard } from "@pisagor/solid";

export function WithoutArrow() {
  return (
    <HoverCard>
      <HoverCard.Trigger
        asChild={(props) => (
          <Button {...props()} variant="link">
            Hover here
          </Button>
        )}
      />
      <HoverCard.Content showArrow={false}>
        <p class="text-muted-foreground text-sm">
          A card without an arrow for flush layouts.
        </p>
      </HoverCard.Content>
    </HoverCard>
  );
}

export { source as WithoutArrowSource };
