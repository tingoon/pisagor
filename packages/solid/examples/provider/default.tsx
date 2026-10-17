import { Provider } from "@pisagor/solid";

export function Default() {
  return (
    <Provider>
      <div class="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
        App content wrapped by Provider.
      </div>
    </Provider>
  );
}
