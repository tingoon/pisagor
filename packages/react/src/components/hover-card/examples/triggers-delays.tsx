import { MapPinIcon } from "@phosphor-icons/react";
import { Avatar, Button } from "@pisagor/react";
import { HoverCard } from "..";
export function TriggersDelays() {
  return (
    <HoverCard closeDelay={300} openDelay={200}>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex gap-2">
          <Avatar fallback="JD" />
          <div className="flex flex-col gap-2">
            <a
              className="font-medium text-sm underline underline-offset-4"
              href="https://example.com/profile/jane.doe"
              rel="noopener"
              target="_blank"
            >
              @jane.doe
            </a>
            <p className="text-muted-foreground text-sm">Frontend Developer</p>

            <p className="flex items-center gap-1 text-muted-foreground text-xs">
              <MapPinIcon className="size-4" />
              Joined in 2016
            </p>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  );
}
