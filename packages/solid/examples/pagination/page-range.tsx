import source from "./page-range.tsx?raw";
import { Pagination } from "@pisagor/solid";

export function PageRange() {
  return <Pagination count={100} page={6} pageSize={10} />;
}

export { source as PageRangeSource };
