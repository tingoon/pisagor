import { ClientOnly } from "@pisagor/solid";

export function Default() {
  return (
    <ClientOnly>
      <div class="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
        This content is only rendered on the client side.
      </div>
    </ClientOnly>
  );
}
