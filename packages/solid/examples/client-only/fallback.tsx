/** @jsxImportSource solid-js */
import { ClientOnly } from "@pisagor/solid/client-only";

export function Fallback() {
  const CurrentTime = () => {
    const now = new Date();

    return (
      <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
        Current time: {now.toLocaleTimeString()}
      </div>
    );
  };
  return (
    <ClientOnly
      fallback={
        <div class="rounded-xl border border-dashed bg-muted/50 px-4 py-3 text-muted-foreground text-sm">
          Loading…
        </div>
      }
    >
      <CurrentTime />
    </ClientOnly>
  );
}
