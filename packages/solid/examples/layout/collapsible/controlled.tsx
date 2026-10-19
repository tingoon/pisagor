import { CaretDownIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Collapsible } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="w-64 space-y-2">
      <Collapsible.Root
        onOpenChange={({ open }) => setOpen(open)}
        open={open()}
      >
        <Collapsible.Trigger
          asChild={(props) => (
            <Button {...props()} class="w-full" variant="outline">
              {open() ? "Collapse" : "Expand"}
              <Collapsible.Indicator>
                <CaretDownIcon />
              </Collapsible.Indicator>
            </Button>
          )}
        />
        <Collapsible.Content>
          <Collapsible.Body class="p-2">
            <p class="text-muted-foreground text-sm">
              This collapsible is controlled. The state is managed externally.
            </p>
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
      <p class="text-muted-foreground text-center text-sm">
        {open() ? "✅" : "❌"}
      </p>
    </div>
  );
}
