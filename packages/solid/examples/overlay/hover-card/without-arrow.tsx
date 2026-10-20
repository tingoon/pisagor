import { Button, HoverCard } from "@pisagor/solid";

export function WithoutArrow() {
  return (
    <HoverCard
      showArrow={false}
      trigger={(props) => (
        <Button {...props} variant="link">
          Hover here
        </Button>
      )}
    >
      <p class="text-muted-foreground text-sm">
        A card without an arrow for flush layouts.
      </p>
    </HoverCard>
  );
}
