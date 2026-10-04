/** @jsxImportSource solid-js */

import { Button, Collapsible } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="w-64 space-y-2">
      <Collapsible onOpenChange={({ open }) => setOpen(open)} open={open()}>
        <Collapsible.Trigger
          asChild={(props) => (
            <Button {...props()} class="w-full" variant="outline">
              {open() ? "Collapse" : "Expand"}
              <Collapsible.Indicator />
            </Button>
          )}
        />
        <Collapsible.Content class="p-2">
          <p class="text-muted-foreground text-sm">
            This collapsible is controlled. The state is managed externally.
          </p>
        </Collapsible.Content>
      </Collapsible>
      <p class="text-center text-muted-foreground text-sm">
        {open() ? "✅" : "❌"}
      </p>
    </div>
  );
}
