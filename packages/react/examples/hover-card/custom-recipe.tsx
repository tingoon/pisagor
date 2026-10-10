import { MapPinIcon } from "@phosphor-icons/react";
import { Avatar, Button, HoverCard } from "@pisagor/react";
import { hoverCardRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandHoverCardRecipe = tv({
  extend: hoverCardRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <HoverCard recipe={brandHoverCardRecipe}>
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
