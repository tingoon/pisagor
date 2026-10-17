import { ClientOnly } from "@pisagor/react";

export function Fallback() {
  const CurrentTime = () => {
    const now = new Date();

    return (
      <div className="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
        Current time: {now.toLocaleTimeString()}
      </div>
    );
  };
  return (
    <ClientOnly
      fallback={
        <div className="bg-muted/50 text-muted-foreground rounded-xl border border-dashed px-4 py-3 text-sm">
          Loading…
        </div>
      }
    >
      <CurrentTime />
    </ClientOnly>
  );
}
