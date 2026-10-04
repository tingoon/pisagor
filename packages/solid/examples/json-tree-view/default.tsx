/** @jsxImportSource solid-js */
import { JsonTreeView } from "@pisagor/solid/json-tree-view";

export function Default() {
  return (
    <JsonTreeView data={{ count: 3, hello: "world", nested: { ok: true } }} />
  );
}
