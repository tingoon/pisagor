import { Avatar } from "../../avatar";
import { Button } from "../../button";
import { HoverCard } from "../index";

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
              class="font-medium text-sm underline underline-offset-4"
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
