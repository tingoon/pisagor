import { cn } from "@pisagor/utils";
import { createSignal } from "solid-js";
import { Button } from "../../button";
import { Presence } from "../index";

export function Default() {
  const [present, setPresent] = createSignal(false);

  return (
    <div class="relative">
      <Button onClick={() => setPresent(!present())} variant="outline">
        Toggle
      </Button>
      <Presence
        asChild={(props) => (
          <div
            {...props({
              class: cn(
                "absolute bottom-full left-1/2 mb-2 -translate-x-1/2",
                "px-4 py-2",
                "bg-muted",
                "text-sm",
                "rounded-md border",
                "origin-bottom",
                "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:slide-out-to-bottom-5 data-[state=closed]:animate-out",
                "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:slide-in-from-bottom-5 data-[state=open]:animate-in",
              ),
            })}
          >
            Content
          </div>
        )}
        present={present()}
      />
    </div>
  );
}
