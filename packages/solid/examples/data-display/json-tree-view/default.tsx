import { JsonTreeView } from "@pisagor/solid";

export function Default() {
  return (
    <JsonTreeView data={{ count: 3, hello: "world", nested: { ok: true } }} />
  );
}
