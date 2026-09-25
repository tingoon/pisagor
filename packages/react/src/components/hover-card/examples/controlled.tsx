import { Button } from "@pisagor/react";
import { useState } from "react";
import { HoverCard } from "..";
export function Controlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <HoverCard
        onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
        open={open}
      >
        <HoverCard.Trigger asChild>
          <Button variant="outline">Hover here</Button>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium">Controlled</h4>
            <p className="text-muted-foreground text-sm">
              The open state is managed externally with <code>open</code> and{" "}
              <code>onOpenChange</code>.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard>
      <p className="text-center text-muted-foreground text-sm">
        {open ? "✅" : "❌"}
      </p>
    </div>
  );
}
