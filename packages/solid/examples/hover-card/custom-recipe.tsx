import { hoverCardRecipe } from "@pisagor/recipes";
import { Avatar, Button, HoverCard } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandHoverCardRecipe = tv({
  extend: hoverCardRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <HoverCard recipe={brandHoverCardRecipe}>
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
