import { Button, HoverCard } from "@pisagor/solid";

export function Disabled() {
  return (
    <HoverCard
      disabled
      trigger={(props) => (
        <Button {...props} variant="link">
          Hover here
        </Button>
      )}
    >
      IT WILL NOT OPEN
    </HoverCard>
  );
}
