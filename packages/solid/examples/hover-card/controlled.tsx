/** @jsxImportSource solid-js */

import { Button, HoverCard } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="flex flex-col gap-2">
      <HoverCard
        onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
        open={open()}
      >
        <HoverCard.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Hover here
            </Button>
          )}
        />
        <HoverCard.Content>
          <div class="flex flex-col gap-1">
            <h4 class="font-medium">Controlled</h4>
            <p class="text-muted-foreground text-sm">
              The open state is managed externally with <code>open()</code> and{" "}
              <code>onOpenChange</code>.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard>
      <p class="text-center text-muted-foreground text-sm">
        {open() ? "✅" : "❌"}
      </p>
    </div>
  );
}
