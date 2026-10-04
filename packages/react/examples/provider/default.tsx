import { Provider } from "@pisagor/react";

export function Default() {
  return (
    <Provider>
      <div className="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
        App content wrapped by Provider.
      </div>
    </Provider>
  );
}
