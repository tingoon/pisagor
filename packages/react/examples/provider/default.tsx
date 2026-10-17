import source from "./default.tsx?raw";
import { Provider } from "@pisagor/react";

export function Default() {
  return (
    <Provider>
      <div className="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
        App content wrapped by Provider.
      </div>
    </Provider>
  );
}

export { source as DefaultSource };
