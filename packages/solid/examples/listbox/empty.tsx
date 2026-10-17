import source from "./empty.tsx?raw";
import { Listbox } from "@pisagor/solid";

export function Empty() {
  return <Listbox emptyText="No frameworks found." items={[]} />;
}

export { source as EmptySource };
