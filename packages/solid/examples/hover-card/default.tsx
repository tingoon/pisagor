import source from "./default.tsx?raw";
import { Avatar, Button, HoverCard } from "@pisagor/solid";

export function Default() {
  return (
    <HoverCard>
      <HoverCard.Trigger
        asChild={(props) => (
          <Button {...props()} variant="ghost">
            Hover here
          </Button>
        )}
      />
      <HoverCard.Content>
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
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  );
}

export { source as DefaultSource };
