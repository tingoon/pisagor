import source from "./default.tsx?raw";
import { Pagination } from "@pisagor/react";

export function Default() {
  return <Pagination count={50} pageSize={10} />;
}

export { source as DefaultSource };
