import { MapPinIcon } from "@squidlab/phosphor-solid/icons";
import { Avatar, Button, HoverCard } from "@pisagor/solid";

export function TriggersDelays() {
  return (
    <HoverCard
      closeDelay={300}
      openDelay={200}
      trigger={(props) => (
        <Button {...props} variant="link">
          Hover here
        </Button>
      )}
    >
      <div class="flex gap-2">
        <Avatar fallback="JD" />
        <div class="flex flex-col gap-2">
          <a
            class="text-sm font-medium underline underline-offset-4"
            href="https://example.com/profile/jane.doe"
            rel="noopener"
            target="_blank"
          >
            @jane.doe
          </a>
          <p class="text-muted-foreground text-sm">Frontend Developer</p>

          <p class="text-muted-foreground flex items-center gap-1 text-xs">
            <MapPinIcon class="size-4" />
            Joined in 2016
          </p>
        </div>
      </div>
    </HoverCard>
  );
}
