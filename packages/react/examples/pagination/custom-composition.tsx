import source from "./custom-composition.tsx?raw";
import { Pagination } from "@pisagor/react";

export function CustomComposition() {
  return (
    <Pagination count={50} pageSize={10}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination>
  );
}

export { source as CustomCompositionSource };
