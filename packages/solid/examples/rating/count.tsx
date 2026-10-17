import source from "./count.tsx?raw";
import { Rating } from "@pisagor/solid";

export function Count() {
  return <Rating count={3} defaultValue={3} />;
}

export { source as CountSource };
