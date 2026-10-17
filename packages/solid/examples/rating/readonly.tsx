import source from "./readonly.tsx?raw";
import { Rating } from "@pisagor/solid";

export function Readonly() {
  return <Rating defaultValue={3} readOnly />;
}

export { source as ReadonlySource };
