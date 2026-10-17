import source from "./default.tsx?raw";
import { ClientOnly } from "@pisagor/react";

export function Default() {
  return (
    <ClientOnly>
      <div className="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
        This content is only rendered on the client side.
      </div>
    </ClientOnly>
  );
}

export { source as DefaultSource };
