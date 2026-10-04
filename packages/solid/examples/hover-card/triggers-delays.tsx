/** @jsxImportSource solid-js */

import { Avatar, Button } from "@pisagor/solid";
import { HoverCard } from "@pisagor/solid/hover-card";
import { MapPinIcon } from "@pisagor/solid/icons";
export function TriggersDelays() {
  return (
    <HoverCard closeDelay={300} openDelay={200}>
      <HoverCard.Trigger
        asChild={(props) => (
          <Button {...props()} variant="link">
            Hover here
          </Button>
        )}
      />
      <HoverCard.Content>
        <div class="flex gap-2">
          <Avatar fallback="JD" />
          <div class="flex flex-col gap-2">
            <a
              class="font-medium text-sm underline underline-offset-4"
              href="https://example.com/profile/jane.doe"
              rel="noopener"
              target="_blank"
            >
              @jane.doe
            </a>
            <p class="text-muted-foreground text-sm">Frontend Developer</p>

            <p class="flex items-center gap-1 text-muted-foreground text-xs">
              <MapPinIcon class="size-4" />
              Joined in 2016
            </p>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  );
}
