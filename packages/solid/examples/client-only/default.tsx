/** @jsxImportSource solid-js */
import { ClientOnly } from "@pisagor/solid";

export function Default() {
  return (
    <ClientOnly>
      <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
        This content is only rendered on the client side.
      </div>
    </ClientOnly>
  );
}
