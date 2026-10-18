import { Listbox } from "@pisagor/react";

export function Empty() {
  return <Listbox emptyText="No frameworks found." items={[]} />;
}
