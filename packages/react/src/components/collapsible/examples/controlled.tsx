import { Button } from "@pisagor/react";
import { useState } from "react";
import { Collapsible } from "..";
export function Controlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 space-y-2">
      <Collapsible onOpenChange={({ open }) => setOpen(open)} open={open}>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            {open ? "Collapse" : "Expand"}
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="p-2">
          <p className="text-muted-foreground text-sm">
            This collapsible is controlled. The state is managed externally.
          </p>
        </Collapsible.Content>
      </Collapsible>
      <p className="text-center text-muted-foreground text-sm">{open ? "✅" : "❌"}</p>
    </div>
  );
}
