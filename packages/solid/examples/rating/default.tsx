import source from "./default.tsx?raw";
import { Rating } from "@pisagor/solid";

export function Default() {
  return <Rating defaultValue={3} />;
}

export { source as DefaultSource };
