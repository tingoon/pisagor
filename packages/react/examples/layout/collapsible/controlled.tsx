import { Button, Collapsible } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 space-y-2">
      <Collapsible.Root onOpenChange={({ open }) => setOpen(open)} open={open}>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            {open ? "Collapse" : "Expand"}
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Collapsible.Body className="p-2">
            <p className="text-muted-foreground text-sm">
              This collapsible is controlled. The state is managed externally.
            </p>
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
      <p className="text-muted-foreground text-center text-sm">
        {open ? "✅" : "❌"}
      </p>
    </div>
  );
}
