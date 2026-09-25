import { JsonTreeView } from "../index";

export function Default() {
  return <JsonTreeView data={{ count: 3, hello: "world", nested: { ok: true } }} />;
}
